import Accordion from 'components/Accordion';
import Title from 'components/Title';
import CollaboratorsCareer from './components/CollaboratorsCareer';
import CollaboratorsPositions from './components/CollaboratorsPositions';
import { collabotorsCarreer, collabotorsNewPositions } from './mockData';
// import styles from './styles.module.scss';

const Opportunity = () => {
  return (
    <Accordion>
      <Accordion.Item
        title={
          <Title text='Готовы к карьерному росту и ждут ваших предложений' />
        }
        isActive={true}
      >
        <CollaboratorsCareer data={collabotorsCarreer} />
      </Accordion.Item>
      <Accordion.Item
        title={
          <Title
            text='Поздравляем коллег, назначенных на новые должности'
            isDark={true}
          />
        }
      >
        <CollaboratorsPositions data={collabotorsNewPositions} />
      </Accordion.Item>
    </Accordion>
    // <AccordionItem
    //   id={1}
    //   active={active}
    //   title='Снижение уровня стресса'
    //   text='Работа и жизнь могут быть полны стресса. Сделать нужно много, а времени часто не хватает. Приобретение навыков тайм-менеджмента поможет вам планировать время эффективнее, определять приоритеты. Как только вы научитесь этому – пропадет «фоновый» стресс от того, что у вас слишком много дел и вы не можете завершить все вовремя. А снижение уровня стресса – это не только дополнительная энергия, но и польза для здоровья.'
    //   handleToggle={handleToggle}
    // />
  );
};

export default Opportunity;
