// Generated by https://quicktype.io

export interface QuicesPreguntas {
  quiz: Quiz[];
}

export interface Quiz {
  id: number;
  imagen: string;
  titulo: string;
  opciones: Opcione[];
}

export interface Opcione {
  id: number;
  opcion: string;
  isTrue: boolean;
}