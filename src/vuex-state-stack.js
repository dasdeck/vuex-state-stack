import StateStack from 'state-stack';

let options = {};

function VuexStateStack(store)
{
    store.$history = new StateStack();

    store.$history.setState(store.state);

    store.$history.on('changed', () =>
    {
        store.replaceState(store.$history.getState());
    });
};

VuexStateStack.setOption = function (key, value)
{
    options[key] = value;
    return VuexStateStack;
}


export default VuexStateStack;