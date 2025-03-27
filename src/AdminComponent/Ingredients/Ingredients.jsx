import React from 'react'
import IngredientTable from './IngredientTable'
import IngredientCategoryTable from './IngredientCategoryTable'
import { Grid } from '@mui/material';


export default function Ingredients() {
  return (
    <div className="px-4 py-4">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
            <IngredientTable />
        </Grid>
        <Grid item xs={12} lg={4}>
            <IngredientCategoryTable />
        </Grid>

      </Grid>
    </div>
  )
}
