const useNode = () => {
    const insertNode = function(data,id,value) {
        if(data.id === id) {
            data.child.push({
                id: new Date().getDate(),
                text: value,
                child: []
            });

            return data;
        }

        let latestNode = [];
        latestNode = data.child.map((obj) => {
            return insertNode(obj,id,value);
        });

        return {...data, child: latestNode};
    }

    const editNode = (data,id,value) => {
        if(data.id === id) {
            data.text = value;
            return data;
        }

        data.child.map((obj) => {
            return editNode(obj,id,value);
        });

        return {...data};
    };

    return {insertNode,editNode}
};

export default useNode