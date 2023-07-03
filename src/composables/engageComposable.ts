import { computed, readonly, Ref, ref } from "vue";
import { toRefs, reactive } from 'vue';


// likely library to use
// yarn add odata-query
//https://www.npmjs.com/package/typescript-odata-client

// https://www.odata.org/libraries/
// list of libraries


// https://github.com/Soontao/light-odata/blob/main/docs/API.SystemQueryOptions.md
// -- OData chaining syntax

export function useEngage<TValue = unknown>(url: Ref<string>, authToken: string, options?: RequestInit | undefined) {
    const data = ref([]) as Ref<TValue[]>;

    const state = reactive({
        error: null,
        loading: false,
        count: 0,
    });

    options = { ...options, headers: { "Authorization": `Bearer ${authToken}`, mode: "cors" } };
    state.loading = true;
    try {
        fetch(url.value, options).then((response) => {

            response.json().then((json) => {
                // console.log('data', json.value);
                data.value = json.value;
                state.count = json['@odata.count'];
            });

        })
            .catch(error => {
                state.error = error;
            })
            .finally(() => {
                state.loading = false;
            });
    } catch (error: any) {
        state.error = error;
        state.loading = false;
    }
    return { data, ...toRefs(state) };
}
