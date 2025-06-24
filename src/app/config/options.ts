import { FilterStatus, Orders,TareaEstado } from '../models/tarea.model';
import { traductions } from '../utils/traductions';

export const formOptions: { name: string; value: TareaEstado }[] = [
  { value: 'pendiente', name: traductions['empty'] },
  { value: 'en progreso', name: traductions['in-progress'] },
  { value: 'completada', name: traductions['finished'] },
];

export const filterOptions: { name: string; value: FilterStatus }[] = [
  { value: 'all', name: traductions['all'] },
  ...formOptions,
];

export const orderOptions: { value: Orders; name: string }[] = [
  {
    value: 'newest',
    name: 'Más Nueva a Más Vieja',
  },
  {
    value: 'oldest',
    name: 'Más Vieja a Más Nueva',
  },
];