export default interface IRouter {
  path: string
  name: string
  template: JSX.Element
  child?: IRouter
}

/*
* if la ruta contiene otra ruta revisamos si tiene hijos y verificamos esos hijos 
*/