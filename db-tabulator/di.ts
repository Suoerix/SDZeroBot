/**
 * Dependency Injection Gateway for db-tabulator
 * 
 * This file replaces the hardcoded imports to `botbase`, `db`, and config
 * variables, allowing the host project (e.g. PexBot) to inject its own
 * dependencies.
 */

import { EventEmitter } from 'events';
import type { Mwn as MwnType } from 'mwn';

// --- Injected Classes & Objects ---
export let bot: MwnType;
export let log: any;
export let emailOnError: any;
export let Mwn: any;
export let TextExtractor: any;
export let fs: any;
export let AuthManager: any;
export let db: any;            // An instantiated database connection pool (e.g. zhwikidb)
export let toolsdb: any;       // The toolsdb class
export let argv: any;

// --- Injected Utility Functions ---
export let arrayChunk: any;
export let createLogStream: any;
export let lowerFirst: any;
export let readFile: any;
export let stripOuterNowikis: any;
export let writeFile: any;
export let setDifference: any;
export let formatSummary: any;
export let timedPromise: any;

// --- Injected Namespaces ---
export let NS_CATEGORY: number;
export let NS_FILE: number;
export let NS_MAIN: number;
export let NS_MODULE: number;

// --- Injected Configuration Constants ---
export let BOT_NAME: string;
export let TEMPLATE: string;
export let TEMPLATE_END: string;
export let SUBSCRIPTIONS_CATEGORY: string;
export let FAILURES_CATEGORY: string;
export let QUERY_TIMEOUT: number;
export let CONCURRENCY: number;
export let MAX_SUBPAGES: number;
export let MAX_CONSECUTIVE_FAILURES_ALLOWED: number;
export let SHUTOFF_PAGE: string;
export let FAKE_INPUT_FILE: string;
export let FAKE_OUTPUT_FILE: string;
export let API_URL: string;
export let USER_AGENT: string;
export let METADATA_DB_NAME: string;

/**
 * Host projects must call this function before using the db-tabulator engine.
 */
export function initDependencies(deps: any, config: any) {
    bot = deps.bot;
    log = deps.log;
    emailOnError = deps.emailOnError;
    Mwn = deps.Mwn;
    TextExtractor = deps.TextExtractor;
    fs = deps.fs;
    AuthManager = deps.AuthManager;
    db = deps.db;
    toolsdb = deps.toolsdb;
    argv = deps.argv;
    
    arrayChunk = deps.arrayChunk;
    createLogStream = deps.createLogStream;
    lowerFirst = deps.lowerFirst;
    readFile = deps.readFile;
    stripOuterNowikis = deps.stripOuterNowikis;
    writeFile = deps.writeFile;
    setDifference = deps.setDifference;
    formatSummary = deps.formatSummary;
    timedPromise = deps.timedPromise;
    
    NS_CATEGORY = deps.NS_CATEGORY;
    NS_FILE = deps.NS_FILE;
    NS_MAIN = deps.NS_MAIN;
    NS_MODULE = deps.NS_MODULE;

    BOT_NAME = config.BOT_NAME;
    TEMPLATE = config.TEMPLATE;
    TEMPLATE_END = config.TEMPLATE_END;
    SUBSCRIPTIONS_CATEGORY = config.SUBSCRIPTIONS_CATEGORY;
    FAILURES_CATEGORY = config.FAILURES_CATEGORY;
    QUERY_TIMEOUT = config.QUERY_TIMEOUT;
    CONCURRENCY = config.CONCURRENCY;
    MAX_SUBPAGES = config.MAX_SUBPAGES;
    MAX_CONSECUTIVE_FAILURES_ALLOWED = config.MAX_CONSECUTIVE_FAILURES_ALLOWED;
    SHUTOFF_PAGE = config.SHUTOFF_PAGE;
    FAKE_INPUT_FILE = config.FAKE_INPUT_FILE;
    FAKE_OUTPUT_FILE = config.FAKE_OUTPUT_FILE;
    API_URL = config.API_URL;
    USER_AGENT = config.USER_AGENT;
    METADATA_DB_NAME = config.METADATA_DB_NAME;
}

// HandledError stub from app.ts (since it's used internally)
export class HandledError extends Error {}
