import {DashboardWidget, DashboardWidgetContainer, LayoutConfig} from '@sanity/dashboard'
import {Button, Card, Code, Spinner, Text} from '@sanity/ui'
import {useCallback, useEffect, useState} from 'react'

function Jokes() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | undefined>()
  const [joke, setJoke] = useState<string | undefined>()

  const getJoke = useCallback(() => {
    setIsLoading(true)
    setError(undefined)
    fetch('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
      .then((res) => res.json())
      .then((data) => setJoke(data.joke))
      .catch((e: Error) => setError(e))
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    getJoke()
  }, [getJoke])

  return (
    <DashboardWidgetContainer
      header="A dad joke"
      footer={<Button text="New joke" tone="primary" onClick={getJoke} disabled={isLoading} />}
    >
      {isLoading && (
        <Card paddingX={3} paddingY={4}>
          <Spinner />
        </Card>
      )}
      {error && !isLoading && (
        <Card paddingX={3} paddingY={4} tone="critical">
          <Code>{JSON.stringify(error, null, 2)}</Code>
        </Card>
      )}
      {joke && !isLoading && !error && (
        <Card paddingX={3} paddingY={4} tone="positive">
          <Text>{joke}</Text>
        </Card>
      )}
    </DashboardWidgetContainer>
  )
}

export function jokesWidget(widgetConfig: {layout?: LayoutConfig} = {}): DashboardWidget {
  return {
    name: 'jokes-widget',
    component: Jokes,
    layout: widgetConfig.layout ?? {width: 'medium'},
  }
}
