export class FileItem {
    public archivo: File;
    public nomArchivo: string;
    public url: string;
    public estadoSubiendo: boolean;
    public progreso: number;
  nombreArchivo: any;

    constructor(archivo: File) {
        this.archivo = archivo;
        this.nomArchivo = archivo.name;
        this.estadoSubiendo = false;
        this.progreso = 0;
    }
}
