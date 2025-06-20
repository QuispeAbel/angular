export interface Tarea {
    id: number | null,
    titulo: string,
    fechaCreacion: Date | string,
    descripcion: string,
    estado: TareaEstado | null,
}

export type TareaEstado = 'pendiente' | 'en progreso' | 'completada';