import { Button, Card } from 'antd'
import React, { useMemo, useState } from 'react'
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';


function DynamicTheming() {

  const [theme, setTheme] = useState(false);

  useMemo(() => {
    ConfigProvider.config({
      theme: {
         primaryColor : theme ? "red" : "black"
      },
    });
  }, [theme])

  const toggleThemeHandler = () => {
    setTheme(prev => !prev)
  }

  return (
    <Card>
        <Button type='primary' onClick={toggleThemeHandler}>
            Click
        </Button>
    </Card>
  )
}

export default DynamicTheming