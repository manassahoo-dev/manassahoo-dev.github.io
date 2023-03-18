import { Card, Grid, Text } from '@geist-ui/core';
import Head from 'next/head';
import React from 'react';

function DSA() {
  const list = ['Array', 'Linked List', 'Stack', 'Queue', 'Tree', 'Graph'];
  return (
    <div>
      <Head>
        <title>Data Structures And Algorithms </title>
        <meta
          name='description'
          content='Data Structures And Algorithms'
          key='desc'
        />
      </Head>

      <Grid.Container gap={2}>
        {list.map((item, index) => (
          <Grid xs={6}>
            <Card shadow hoverable width={'100%'}>
              <Text h4 margin={0}>
                {item}
              </Text>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}

export default DSA;
