import * as b from 'bobril';
import "bobril-flex-ie10";
import * as m from 'bobril-m';
import * as Container from './components/container';
import * as Layout from './components/layout';
import * as Markdown from '../index';

// All definitions of charts are copied from http://www.markdown.org/docs/

m.initRobotoFonts();

// *********************************************************************************
// ************************* Example of bobril-markdown usage ***********************
// *********************************************************************************
b.init(() => {
    return [
        Layout.create({
            header: 'bobril-markdown',
            description: [
            ],
            examples: [
                Container.create({
                    label: 'Markdown',
                    content: Markdown.create({
                    })
                })
            ]
        })
    ]
});