import * as b from 'bobril';
// import * as remark from 'remark';
// import remarkBobril from 'remark-bobril';

export interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
    remarkProcessor: any;
}

export const create = b.createComponent<IData>({

    init(ctx: IContext) {
        ctx.remarkProcessor = null;
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        me.tag = 'div';
        me.children = '#Ahoj svete';
        // TODO implement remark-bobril
        // me.children = ctx.remarkProcessor !== null ? ctx.remarkProcessor.processSync('# Ahoj svete').contents : [];
    },

    postInitDom(ctx: IContext, me: b.IBobrilCacheNode) {
        if (ctx.remarkProcessor === null) {
            // TODO Initialize remark bobril
            // ctx.remarkProcessor = remark().use(remarkBobril);
            b.invalidate(ctx);
        }
    }
});
