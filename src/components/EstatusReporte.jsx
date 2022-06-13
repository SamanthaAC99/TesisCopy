import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '# Orden', width: 70 },
  { field: 'fi', headerName: 'Fecha', width: 130 },
  { field: 'fs', headerName: 'Hora', width: 130 },
  { field: 'ci', headerName: 'CI Solicitante', width: 130 }, 
  { field: 'act', headerName: 'Departamento Solicitante', width: 130 }, 
  { field: 'est', headerName: 'Prioridad', width: 130 }, 
  { field: 'rep', headerName: 'Tipo de Trabajo', width: 130 }, 
  { field: 'obs', headerName: 'Asunto', width: 130 }, 
  { field: 'verif', headerName: 'Problemática', width: 130 },
  { field: 'prov', headerName: 'Observaciones', width: 130 },  


  //   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
];

const rows = [
  { id: 1, a: 'Snow', b: 'Jon', c: 35 },
];

export default function Tablareporte() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
