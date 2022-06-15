import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" color="primary">
            Pagina inicial
          </Button>
        }
      />

      {
        <Route
          path="*"
          element={<Navigate to="/pagina-inicial" />}
        /> /*redirect*/
      }
    </Routes>
  );
};
