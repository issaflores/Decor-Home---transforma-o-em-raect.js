import styles from 'src/components/card/card.module.css';

export default function Card(){
    return(
        <>
        <header id={styles['card-subscription']}>
            <div id="disclaimer">
                <h2>Decor Home </h2>
                <p className={styles['card-about']}>
                    Um evento para revolucionar a sua criatividade
                </p>
                <p>Data do evento:</p>
                <p className={styles['card-date']}>Domingo, 28 de Maio, a partir das 14h</p>
            </div>
            <div id="subscription-form">
                <p>Preencha o formulário para receber os detalhes do evento</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input type="text" placeholder="Digite seu nome" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" placeholder="Digite seu melhor e-mail" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefone</label>
                        <input type="text" placeholder="Número de Whatsapp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="interest">Principal interesse</label>
                        <select name="interest" defaultValue="">
                            <option value="" disabled>
                                Selecione
                            </option>
                            <option value="apartment">Apartamentos</option>
                            <option value="house">Casas</option>
                            <option value="garden">Jardins</option>
                            <option value="other">Outro</option>
                        </select>
                    </div>
                    <input type="submit" className="btn" value="Quero me inscrever" />
                </form>
            </div>
        </header>
        <section id="key-benefits">
                <h2>O que você vai aprender:</h2>
                <div className="benefits">
                    <div className="benefit">
                        <div id="benefit-1" className="benefit-img"></div>
                        <p>
                            Descubra o que é realmente especial em decoração.
                            Um evento que trará uma dose de magia aos seus ambientes, fazendo toda a diferença na sua vida.
                        </p>
                    </div>
                    <div className="benefit">
                        <div id="benefit-2" className="benefit-img"></div>
                        <p>
                            Entre em uma jornada de design que vai além da estética. Pequenos detalhes, grandes impactos.
                            Faça parte de uma experiência que transforma espaços e eleva suas emoções.
                        </p>
                    </div>
                    <div className="benefit">
                        <div id="benefit-3" className="benefit-img"></div>
                        <p>
                            Mais que decoração, é contar a história da sua casa.
                            Desvende opções, expresse-se e crie um lar que faz a diferença no seu dia a dia.
                            Junte-se a nós nessa jornada única.
                        </p>
                    </div>
                </div>
            </section><section id="location">
                <div id="address">
                    <i className="bi bi-geo-alt-fill"></i>
                    <div id="address-details">
                        <p>Rua do evento, 1333</p>
                        <p>Bairro</p>
                        <p>Abertura: 14h</p>
                    </div>
                </div>
                <div id="about-location">
                    <h3>Local de destaque</h3>
                    <p>
                        O evento será realizado em um local prestigiado pelos amantes de
                        Design de Interiores, onde teremos exemplos de vários ambientes,
                        tanto internos como externos.
                    </p>
                </div>
            </section>
            <section id="details">
                <div className="detail" id="detail-1">
                    <img src="/image/cara1.jpg" alt="" />
                    <div className="detail-description">
                        <h3>Conheça os ambientes que você vai aprender a decorar</h3>
                    </div>
                </div>
                <div className="detail" id="detail-2">
                    <div className="detail-description">
                        <h3>Detalhes</h3>
                        <ul>
                            <li>Posicionamento</li>
                            <li>Aproveitamento de espaço</li>
                            <li>Combinação de cores</li>
                            <li>Organização</li>
                            <li>E muito mais...</li>
                        </ul>
                    </div>
                    <img src="/image/capa8.jpg" alt="" />
                </div>
                <div className="detail" id="detail-3">
                    <img src="/image/img4.jpg" alt="" />
                    <div className="detail-description">
                        <h3>Objetos</h3>
                        <ul>
                            <li>Cadeiras</li>
                            <li>Mesas</li>
                            <li>Espelhos</li>
                            <li>Plantas</li>
                            <li>Cortinas</li>
                            <li>E muito mais...</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="cta">
                <h3>Gostou? Então se inscreva:</h3>
                <button className="btn">Solicitar Inscrição</button>
            </section>
            <footer id="footer">
                <h3>Decor Home</h3>
                <p>A evolução da decoração de interiores</p>
                <p>
                    <span>Entre em contato:</span> oi@decorhome.com.br
                </p>
                <p>
                    <span>Ou pelo telefone:</span> (55)9 9999-9999
                </p>
            </footer></> 
  )};

    