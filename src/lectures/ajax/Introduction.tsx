import React, {FC} from 'react';
import {Heading, ListItem, Slide, SlideLayout, UnorderedList} from 'spectacle';
import {H3} from '../../components/typography';

const Introduction: FC = () => {
    return (
        <>
            <SlideLayout.Center>
                <Heading>JavaScript</Heading>
                <H3>AJAX и др. браузерные API, часть I</H3>
            </SlideLayout.Center>
            <Slide>
                <Heading>Темы лекции</Heading>
                <UnorderedList>
                    <ListItem>HTTP Протокол</ListItem>
                    <ListItem>AJAX</ListItem>
                    <ListItem>CORS</ListItem>
                    <ListItem>Локальные хранилища данных</ListItem>
                    <ListItem>Полифилы</ListItem>
                    <ListItem>Модули в JS</ListItem>
                </UnorderedList>
            </Slide>
        </>
    )
}

export default Introduction;
