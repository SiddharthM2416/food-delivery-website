# TODO: Fix Errors in Food Delivery Webapp

## Tasks
- [x] Edit frontend/src/components/FoodDisplay/foodDisplay.jsx:
  - [x] Add import for useContext from 'react'
  - [x] Rename component from 'foodDisplay' to 'FoodDisplay'
  - [x] Fix context usage: replace 'const food_list = storeContext(storeContext)' with 'const { food_list } = useContext(storeContext)'
  - [x] Update export to 'export default FoodDisplay'
- [x] Edit frontend/src/pages/home/Home.jsx:
  - [x] Change import to 'import FoodDisplay from '../../components/FoodDisplay/foodDisplay''
  - [x] Change JSX to '<FoodDisplay category={category}/>'
