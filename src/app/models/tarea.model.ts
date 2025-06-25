export interface Tarea {
    id: number | null,
    titulo: string,
    fechaCreacion: Date | string,
    descripcion: string,
    estado: string | null | TareaEstado,
}

export type TareaEstado = 'pendiente' | 'en progreso' | 'completada';

export type FilterStatus = TareaEstado | 'all'

export type Orders = 'newest' | 'oldest'