import { useEffect, useState } from "react";

export function useMyForm() {
  const [result, setResult] = useState()
  const [bonus, setBonus] = useState()
  const [activities, setActivities] = useState()

  const activityChange = (data) => {
    setActivities(data)
  }

  useEffect(() => {
    if (isNaN(parseInt(bonus)) || isNaN(parseInt(activities))) return
    const unitValue = bonus/activities
    // console.log('loop', unitValue)
    setResult(unitValue)
  }, [bonus, activities])

  return {
    setBonus,
    activityChange,
    result,
    activities
  }

}