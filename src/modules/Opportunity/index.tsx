import { useState, useEffect } from 'react';
import Accordion from 'components/Accordion';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Title from 'components/Title';
import CollaboratorsCareer from './components/CollaboratorsCareer';
import CollaboratorsPositions from './components/CollaboratorsPositions';
import { fetchData, initialState } from './utils';
import { IResponse } from 'types';

const Opportunity = () => {
  const [data, setData] = useState<IResponse>(initialState);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((res) => {
        if (res.isError) {
          setError(true);
          return;
        }
        setData(res);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError || data.isError) {
    return (
      <section>
        <Error />
      </section>
    );
  }

  return (
    <Accordion>
      <Accordion.Item
        title={
          <Title text='Готовы к карьерному росту и ждут ваших предложений' />
        }
        isActive={true}
      >
        <CollaboratorsCareer data={data.dataReady} />
      </Accordion.Item>
      <Accordion.Item
        title={
          <Title
            text='Поздравляем коллег, назначенных на новые должности'
            isDark={true}
          />
        }
      >
        <CollaboratorsPositions data={data.dataAssigned} />
      </Accordion.Item>
    </Accordion>
  );
};

export default Opportunity;
