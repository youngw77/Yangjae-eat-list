import StoreList from '@/views/StoreList';
import CreateList from '@/views/CreateList';
import StoreStatus from '@/views/StoreStatus';
// import FoodReview from '@/views/FoodReview';

const routes = [
    {
        path: "/StoreList",
        name: "StoreList",
        component: StoreList,
        meta: {name:"Store List", icon: "mdi-view-list"},
    },
    {
        path: "/CreateList",
        name: "CreateList",
        component: CreateList,
        meta: {name:"Create List", icon: "mdi-view-list"},
    },
    {
        path: "/StoreStatus/:listIndex",
        name: "StoreStatus",
        component: StoreStatus,
    },

    // {
    //     path: "/FoodReview.vue",
    //     name: "FoodReview",
    //     component: FoodReview,
    //     meta: {name:"Food Review", icon: "mdi-view-list"},
    // },
]


export default routes;