import { Grid2 } from '@mui/material'
import React from 'react'
import IngredientTable from './IngredientTable'
import IngredientCategoryTable from './IngredientCategoryTable'

export default function Ingredients() {
  return (
    <div className="px-4 py-4">
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} lg={8}>
            <IngredientTable />
        </Grid2>
        <Grid2 item xs={12} lg={4}>
            <IngredientCategoryTable />
        </Grid2>

      </Grid2>
    </div>
  )
}
