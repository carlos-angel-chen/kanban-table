export default class KanbanAPI{
    static getItem(columnId){
        // find() lee el contenido y compara el column id para reconocer
        // el id de la columna
        const column = read().find(column => column.id == columnId);

        if (!column){
            return [];
        }

        return column.items
    }
}

function read(){
    const json = localStorage.getItem("kanban-data");

    /* if there is no data, it will return the following empty
     * json file
    */ 
    if (!json){
        return [
            {
                id: 1,
                items: []
            },
            {
                id: 2,
                items: []
            },
            {
                id: 3,
                items: []
            }
        ];
    }

    return JSON.parse(json);
}

function save(data){
    localStorage.setItem("kanban-data", JSON.stringify(data));
}