import { defineStore, acceptHMRUpdate } from 'pinia'

export const usePagesStore = defineStore('pages-store', {
    state: () => ({
        pages: [
            {
                'id': 1,
                'title': 'Homepage',
                'path': null,
                'slug': 'homepage',
                'url': '/homepage',
                'is_published': null,
                'categories': []
            },
            {
                'id': 2,
                'title': 'Checking Account',
                'path': null,
                'slug': 'checking',
                'url': '/checking',
                'is_published': null,
                'categories': []
            }
        ],
        page: {
            'id': 1,
            'title': 'Homepage',
            'path': null,
            'slug': 'homepage',
            'url': '/homepage',
            'is_published': null,
            'categories': []
        },
    }),
    
    // actions: {
    //     index() {},
    //     store() {},
    //     show() {},
    //     update() {},
    //     destroy() {},
    // }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePagesStore, import.meta.hot))
}
