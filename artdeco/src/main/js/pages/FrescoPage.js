import React, {Component} from 'react';

import DefaultHeader from "../components/DefaultHeader";
import {ProductList} from "../app";

import '../../resources/static/style.css';


export class FrescoPage extends Component {
    constructor(props) {
        super(props);
        this.products = props.products
    }

    render() {
        return (
            <>
                <DefaultHeader text="Фрески" />

                <div className="text">
                    <p>Сейчас фрески в интерьере встречаются все чаще. Ведь декорировать таким способом стену ненамного
                        сложнее, чем поклеить фотообои.
                        Не стоит также забывать, что фрески в интерьере смотрятся лучше обычных обоев, ведь они могут
                        зрительно увеличить пространство! А изготовленные методом фотопечати современные фрески
                        отличаются высокой точностью передачи изображений. </p>
                </div>
                <div className="text">
                    <p>Фрески можно чистить с моющими средствами, не опасаясь, что декоративное покрытие повредится.
                        Высокое качество печати и художественных красок позволяет получить фреску, которая будет
                        смотреться идеально даже спустя большое количество времени.</p>
                </div>
                <div className="container">
                    <h1>Фрески</h1>
                </div>

                <ProductList products={this.products}/>
                <div className="text">
                    <p>Если нужно получить стильный интерьер, то данный вид декора придется по вкусу всем, его
                        возможности безграничны. Выбор остается за Вами, любоваться на полотно знаменитого живописца,
                        абстрактный рисунок, цветочный орнамент, пейзаж, городскую улочку или нестареющую классику.
                        Мы предлагаем готовые решения, а также работаем с индивидуальными заказами!</p>
                </div>
                <footer>
                    <div className="footer-top clearfix">
                        <a href="#" className="footer-logo">Art Deco</a>
                        <ul className="footer-nav clearfix">
                            <div className="footer-nav-container">
                                <li><a href="/plaster">Декоративная штукатурка</a></li>
                                <li><a href="/fresco">Фрески</a></li>
                                <li><a href="/paint">Краски</a></li>
                                <li><a href="/wallpaper">Обои</a></li>
                                <li><a href="/decor">Декор</a></li>
                                <li><a href="/project">Наши проекты</a></li>
                                <li><a href="/contact">Контакты</a></li>
                            </div>
                        </ul>
                    </div>
                    <div className="footer-bottom clearfix">
                        <div className="footer-left">
                            <p className="address">г. Самара, ул.Ново-Садовая, д. 163</p>
                            <p className="contacts">тел. +7 (846) 248-08-78<br/>
                                e-mail: artdeco63@inbox.ru</p>
                        </div>
                        <div className="footer-right">
                            <a className="inst-icon" href="https://www.instagram.com/artdeco_63/"></a>
                            <span className="inst-text">artdeco_63</span>
                            <span className="middle-el"/>
                        </div>
                        <p className="copyright">© 2021 Art Deco</p>
                    </div>
                </footer>
            </>
        )
    }
}