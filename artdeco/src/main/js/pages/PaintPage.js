import React, {Component } from 'react'
import "materialize-css/dist/css/materialize.css"
import {ProductList} from "../app";

import '../../resources/static/style.css'
import {Link} from 'react-router-dom';
export class PaintPage extends Component{
	constructor(props) {
		super(props);
		this.products = props.products
	}

	render() {
		return (
			<>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
                                      <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet" />
                                      <meta charSet="utf-8" />
                                      <meta name="keywords" content="штукатурка, фреска, краска,
                                        обои, декор, декоративный, ремонт" />
                                      <meta name="description" content />
                                      <title> Art Deco </title>
                                      <header>
                                        <div className="header-top clearfix">
                                          <div className="header-logo">
                                            <a href="/">Art Deco</a>
                                          </div>
                                          <ul className="header-nav clearfix">
                                            <div className="header-nav-container">
                                              <Link to = {'/plaster'}>Декоративная штукатурка</Link>
                                              <Link to = {'/fresco'}>Фрески</Link>
                                              <Link to = {'/paint'}>Краски</Link>
                                              <Link to = {'/wallpaper'}>Обои</Link>
                                              <Link to = {'/decor'}>Декор</Link>
                                              <Link to = {'/project'}>Наши проекты</Link>
                                              <Link to = {'/contact'}>Контакты</Link>
                                            </div>
                                          </ul>
                                        </div>
                                        <p className="header-text">Уникальные покрытия.
                                          <br />Уникальные решения</p>
                                      </header>
                <div className="container">
                                      <div className="text">
                                      <p>Людям, которые любят обновления, стоит обратить внимание на краски.
                                      Они помогут, когда необходимо придать стенам ровный и качественный вид на продолжительный срок.
                                      Преимуществом красок является возможность создания идеально подходящего оттенка.
                                      А если Вы передумаете, цвет можно легко и быстро поменять. Стоит отметить, что краска позволяет
                                      создать что-то уникальное, но в то же время простое. Как еще создать идеально белые стены,
                                      которые порой так необходимы интерьеру?</p>
                                      </div>
                                      <div className="text">
                                      <p>При помощи краски можно замаскировать мелкие дефекты стен, она не боится влажной
                                      уборки и не привлечет внимание Вашего домашнего питомца.  А еще со временем она не
                                      теряет яркости! Не стоит забывать, что в различных помещениях возникает необходимость
                                      и в различном составе красок, мы с удовольствием поможем подобрать идеальный состав.</p>
                                      </div>


				<div className="container">
					<h1>Краски, красочки</h1>
				</div>

				<ProductList products={this.products}/>
				<div className="text">
				<p>Мы поможем Вам выбрать идеальную краску с подходящим составом, учитывая все Ваши пожелания и цели!</p>
				</div>

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
                                        <p className="contacts">тел. +7 (846) 248-08-78<br />
                                          e-mail: artdeco63@inbox.ru</p>
                                      </div>
                                      <div className="footer-right">
                                        <a className="inst-icon" href="https://www.instagram.com/artdeco_63/"></a>
                                        <span className="inst-text">artdeco_63</span>
                                        <span className="middle-el" />
                                      </div>
                                      <p className="copyright">© 2021 Art Deco</p>
                                    </div>
                                  </footer>
			</>
		)
	}
}