import { useEffect, useState } from 'react'

export const useWorkExperience = () => {
  const startDate = new Date('2019-12-19')
  const currentDate = new Date()
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(0)

  useEffect(() => {
    const calculateExperience = () => {
      const diffInMilliseconds = currentDate.getTime() - startDate.getTime()
      const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365))
      setYearsOfExperience(years)
    }

    calculateExperience()
  }, [])

  return yearsOfExperience
}
