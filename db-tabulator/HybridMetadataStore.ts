import {MetadataStore} from "./MetadataStore.js";
import {Query} from "./app.js";
import {MariadbMetadataStore} from "./MariadbMetadataStore.js";
import {NoMetadataStore} from "./NoMetadataStore.js";
import {log} from "./di.js";

export class HybridMetadataStore implements MetadataStore {

    stores: MetadataStore[] = [
        new MariadbMetadataStore(),
        new NoMetadataStore(),
    ];
    activeStore: MetadataStore;

    async init(): Promise<void> {
        for (const store of this.stores) {
            try {
                await store.init();
                this.activeStore = store;
                break;
            } catch (e) {
                log(`[E] Failed to init ${store}`);
                log(e);
            }
        }
    }

    getQueriesToRun() {
        return this.activeStore.getQueriesToRun();
    }

    getAllPages() {
        return this.activeStore.getAllPages();
    }

    removeOthers(pages: Set<string>) {
        return this.activeStore.removeOthers(pages);
    }

    updateLastTimestamp(query: Query) {
        return this.activeStore.updateLastTimestamp(query);
    }

    recordFailure(query: Query) {
        return this.activeStore.recordFailure(query);
    }

    updateMetadata(page: string, queries: Query[]) {
        return this.activeStore.updateMetadata(page, queries);
    }

    getAllLuaSources(): Promise<Array<string>> {
        return this.activeStore.getAllLuaSources();
    }

    getPagesWithLuaSource(luaSource: string): Promise<Array<string>> {
        return this.activeStore.getPagesWithLuaSource(luaSource);
    }
}
