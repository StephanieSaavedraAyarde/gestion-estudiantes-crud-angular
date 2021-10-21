import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private firestore: AngularFirestore) { }

  agregarEstudiante(estudiante: any): Promise<any>{
    return this.firestore.collection('estudiante').add(estudiante);

  }

  getEstudiantes(): Observable<any>{
    return this.firestore.collection('estudiante', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }
}
