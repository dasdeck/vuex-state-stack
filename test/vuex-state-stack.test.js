import VuexStateStack from '../src/vuex-state-stack';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


describe('vuex-state-stack', () =>
{
    it('test install', () =>
    {
        const store = new Vuex.Store({

            state: {
                count: 0
            },
            mutations: {
                add(state, value){
                    this.$history.startTransaction("add " + value);
                    state.count += value;
                }
            },
            plugins: [VuexStateStack]

        });

        expect(store.$history.canUndo()).toBe(false);

        store.commit('add', 10);
        expect(store.state.count).toBe(10);

        expect(store.$history.canUndo()).toBe(true);

        store.$history.undo();

        expect(store.state.count).toBe(0);


    });
})