import React, {useCallback, useEffect, useState} from 'react'
import axios, {AxiosResponse} from 'axios'
import {Button, Card, Code} from '@sanity/ui'
import {DashboardWidgetContainer, DashboardWidget, LayoutConfig} from '@sanity/dashboard'

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://icanhazdadjoke.com/',
  headers: {
    Accept: 'application/json',
  },
}

function Jokes() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | undefined>()
  const [joke, setJoke] = useState<string | undefined>()

  const getJoke = useCallback(() => {
    setIsLoading(true)
    axios
      .request(config)
      .then((response: AxiosResponse) => {
        console.log(setJoke(response.data.joke))
      })
      .catch((e: Error) => setError(e))
      .finally(() => setIsLoading(false))
  }, [setError, setIsLoading])

  useEffect(() => {
    getJoke()
  }, [getJoke])

  return (
    <DashboardWidgetContainer header="A dad joke">
      {error && (
        <Card paddingX={3} paddingY={4} tone="critical">
          <Code>{JSON.stringify(error, null, 2)}</Code>
        </Card>
      )}
      {!error && (
        <Card paddingX={3} paddingY={4} tone="positive">
          <p>{joke}</p>
        </Card>
      )}
    </DashboardWidgetContainer>
  )
}

export function jokesWidget(config: {layout?: LayoutConfig} = {}): DashboardWidget {
  return {
    name: 'jokes-widget',
    component: Jokes,
    layout: config.layout ?? {width: 'medium'},
  }
}
