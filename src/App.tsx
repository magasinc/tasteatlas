import './App.css'

import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import DishTable from './components/DishTable'
import Student from './components/Student'
import { type Dish } from './interface/Dish'

function App() {
  // PENDIENTE: Variable de estado y la función de modificación.
  const [dishes, setDishes] = useState<Dish[]>([])
  const url = 'https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json'

  // PENDIENTE:
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON.
  // Al recibir la respuesta, actualice la variable de estado.
  useEffect(() => {
    const fetchDishes = async () => {
      const response = await fetch(url)
      const data: Dish[] = await response.json()
      setDishes(data)
    }

    fetchDishes()
  }, [url])

  return (
    <Grid container spacing={5}>
      <Grid size={{ xs: 12 }}>
        {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
        <Student apellidos="Gallegos" nombres="Mateo" paralelo="102" />
      </Grid>

      <Grid size={{ xs: 12 }}>
        {/* PENDIENTE: Envíe la variable de estado como prop */}
        <DishTable data={dishes} />
      </Grid>
    </Grid>
  )
}

export default App
