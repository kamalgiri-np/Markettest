interface EstimatedReadingTimeProps {
  minutes: number
}

export function EstimatedReadingTime({ minutes }: EstimatedReadingTimeProps) {
  return <span>{minutes} min read</span>
}
