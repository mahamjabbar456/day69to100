/**************************************
 * REOPEN THE INTERFACE AND USE CASES *
 **************************************/

interface Settings{
    readonly theme:boolean;
    font:string
}

interface Settings {
    sidebar : boolean
}

interface Settings {
    external : boolean
}

let userSetting:Settings = {
    theme: true,
    font : "Callibri",
    sidebar :true,
    external: false
}