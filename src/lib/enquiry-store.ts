import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { StoredEnquiry } from './types';

/**
 * Demo persistence for enquiries.
 *
 * Enquiries are appended to a JSON file on the server running this app. That is
 * real, inspectable storage for a local or single-server deployment — and it is
 * deliberately NOT a production backend:
 *
 *   • it does not survive a serverless/ephemeral filesystem,
 *   • it sends no email or CRM notification to anyone,
 *   • it has no auth around the stored data.
 *
 * See README.md › "Connecting a production backend" for how to swap this module
 * for a database or CRM. Everything above this layer talks to `saveEnquiry` and
 * `readEnquiries` only, so one file changes.
 */

const DATA_DIR = path.join(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'enquiries.json');

async function readAll(): Promise<StoredEnquiry[]> {
  try {
    const raw = await readFile(DATA_FILE, 'utf8');
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredEnquiry[]) : [];
  } catch (error) {
    const code = (error as NodeJS.ErrnoException)?.code;
    if (code === 'ENOENT') return [];
    // A corrupt file should not take the endpoint down; start a fresh list.
    console.error('[creatourzz] could not read the enquiry store:', error);
    return [];
  }
}

export async function saveEnquiry(enquiry: StoredEnquiry): Promise<{ persisted: boolean }> {
  try {
    await mkdir(DATA_DIR, { recursive: true });
    const all = await readAll();
    all.push(enquiry);
    await writeFile(DATA_FILE, JSON.stringify(all, null, 2), 'utf8');
    return { persisted: true };
  } catch (error) {
    // A read-only filesystem is an expected deployment case, not a crash.
    console.error('[creatourzz] could not write the enquiry store:', error);
    return { persisted: false };
  }
}

export async function readEnquiries(): Promise<StoredEnquiry[]> {
  return readAll();
}

export function storeLocation(): string {
  return DATA_FILE;
}
