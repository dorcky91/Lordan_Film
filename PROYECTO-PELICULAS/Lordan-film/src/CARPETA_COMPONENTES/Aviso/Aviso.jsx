import Modal from "react-bootstrap/Modal";
import { Accordion } from "react-bootstrap";
import "../Aviso/Aviso.css";

function Aviso(props) {
  const tipo = props.tipo;
  if (tipo == "Avisos Legales") {
    return (
      <>
        <Modal
          show={props.show}
          onHide={props.onHide}
          size="lg"
          scrollable
          className="text-black">
          <Modal.Header closeButton>
            <Modal.Title className="text-uppercase">{tipo}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="small">
            <h6 className="text-uppercase">Lordan Film</h6>
            <p className="small">
              Lordan Film es un "web site" que ofrece información, acceso a
              contenidos de diferentes tipos de películas en el mundo del cine.
            </p>
            <h6>CONDICIONES DE UTILIZACIÓN DEL "WEB SITE"</h6>
            <p className="small">
              El usuario se compromete a utilizar el "web site" conforme a lo
              establecido en este aviso legal. En ningún caso,
              <span className="text-danger fw-bolder"> Lordan Film</span> será
              responsable de los daños que pudiera causar el usuario por uso
              erróneo o indebido en relaciones con terceros, siendo
              responsabilidad única y exclusiva del usuario del "web site". El
              usuario asumirá todos los gastos, costes e indemnizaciones que
              pudieran derivarse de procesos iniciados contra él por
              incumplimiento de lo establecido en el presente aviso legal.
            </p>
            <p className="small">
              El usuario del "web site" se compromete a no utilizar el mismo o
              sus contenidos de forma contraria a lo dispuesto por la
              legislación vigente que sea de aplicación.
            </p>
            <p className="small">
              En ningún caso,
              <span className="text-danger fw-bolder"> Lordan Film</span> será
              responsable de cualquier interrupción o falta de continuidad en el
              acceso a este "web site" causado por acciones u omisiones de
              <span className="text-danger fw-bolder"> Lordan Film</span> o de
              terceros.
            </p>
            <h6>CONTENIDOS DEL "WEB SITE"</h6>
            <p className="small">
              <span className="text-danger fw-bolder"> Lordan Film</span> se
              reserva el derecho a modificar el contenido y elementos que
              integran su "web site", sin necesidad de comunicarlo previamente,
              cuando lo estime conveniente de acuerdo con el ejercicio de sus
              servicios.
            </p>
            <p className="small">
              En el futuro,
              <span className="text-danger fw-bolder"> Lordan Film</span> puede
              ofrecer enlaces a otros "web sites" relativos a nuestro sector de
              actividad. Aunque se trata de asegurar que esos "web sites"
              cumplan los estándares adecuados,
              <span className="text-danger fw-bolder"> Lordan Film</span> no
              garantiza el cumplimiento ni de la normativa de protección de
              datos ni de la sociedad de la información en los mismos. Asimismo,
              y si se diera el caso,
              <span className="text-danger fw-bolder"> Lordan Film</span> no se
              responsabiliza de la integridad y veracidad del contenido de los
              enlaces a las "web sites" a los que pueda accederse desde su
              página.
            </p>
            <p className="small">
              <span className="text-danger fw-bolder"> Lordan Film</span> pone a
              disposición de los usuarios un grupo de profesionales encargados
              de actualizar y revisar la veracidad y la integridad del contenido
              de las informaciones vertidas en el "web site". Sin embargo, dada
              la naturaleza del medio y los posibles riesgos de interrupción del
              servicio, alteración del acceso o de los contenidos del "web site"
              por parte de terceros,
              <span className="text-danger fw-bolder"> Lordan Film </span>
              excluye cualquier responsabilidad que pudiera surgir de los
              contenidos que figuran en su "web site".
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  } else if (tipo == "Términos y condiciones") {
    return (
      <>
        <Modal
          show={props.show}
          onHide={props.onHide}
          size="lg"
          scrollable
          className="text-black">
          <Modal.Header closeButton>
            <Modal.Title className="text-uppercase">{tipo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="small">
              Lea estos Términos y condiciones detenidamente antes de acceder o
              utilizar el sitio web.
            </p>
            <h6 className="text-uppercase">Aceptación de los Términos</h6>
            <p className="small">
              El usuario es cualquier persona que utiliza la Plataforma, y
              acceda al contenido del Servicio. El uso, mediante el alquiler y/o
              compra de cualquier contenido disponible en el Servicio implica la
              aceptación por parte del Usuario de forma plena y sin reservas de
              las presentes Condiciones de Uso y Condiciones Contractuales,
              incluida la Política de Privacidad, en la versión publicada en el
              momento en el que el Usuario utilice el Servicio, así como todos
              los avisos, reglamentos de uso e instrucciones puestos en
              conocimiento de los usuarios y que completan o modifican lo
              previsto en estas Condiciones.
            </p>
            <p className="small">
              <span className="text-danger fw-bolder"> Lordan Film</span> se
              reserva la posibilidad de modificar estas Condiciones de Uso en
              cualquier momento por razones legales, por motivos técnicos,
              cambios en la Plataforma o en la normativa o por decisiones
              corporativas.
              <span className="text-danger fw-bolder"> Lordan Film</span> deberá
              mantener actualizadas las Condiciones de Uso. El usuario deberá
              leer y aceptar estas Condiciones cada vez que contrate el acceso a
              los contenidos (mediante la compra o alquiler) del Servicio. La
              versión vigente de las Condiciones de Uso estará siempre
              disponible y si el Usuario no estuviera de acuerdo con las
              Condiciones, deberá dejar de utilizar el Servicio.
            </p>
            <p className="small">
              El usuario declara que tiene dieciocho (18) años o más y que tiene
              la capacidad legal necesaria para aceptar estos términos. Además,
              si contratas el acceso a los contenidos a través de cualquiera de
              las modalidades del Servicio, de compra y/o alquiler, serán de
              aplicación las Condiciones Contractuales, así como cualesquiera
              otras condiciones particulares que en su caso sean de aplicación
              al servicio particular que hubieras contratado y que en todo caso
              <span className="text-danger fw-bolder"> Lordan Film</span> pondrá
              en conocimiento del Usuario en el momento de la contratación. Esas
              condiciones particulares completarán las presentes Condiciones de
              Uso y, en caso de discrepancia, prevalecerán los términos de las
              condiciones particulares sobre los estipulados en estas
              Condiciones de Uso.
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  } else if (tipo == "Política y privacidad") {
    return (
      <>
        <Modal
          show={props.show}
          onHide={props.onHide}
          size="lg"
          scrollable
          className="text-black">
          <Modal.Header closeButton>
            <Modal.Title className="text-uppercase">{tipo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="small">
              En cumplimiento del Reglamento 2016/679 del Parlamento Europeo y
              del Consejo de 27 de abril de 2016 relativo a la protección de las
              personas físicas en lo que respecta al tratamiento de datos
              personales y a la libre circulación de estos datos; y de la Ley
              Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
              Personales y garantía de los derechos digitales, acorde a sus
              fines de gestión del servicio público, informa a los usuarios que
              toda la información recabada sobre datos de carácter personal a
              través de la plataforma de película, serán tratados en todo
              momento, conforme a los principios de licitud, lealtad,
              transparencia, proporcionalidad, minimización de datos, limitación
              de la finalidad, confidencialidad, integridad y exactitud que
              establece el RGPD.
            </p>
            <h6 className="text-uppercase">¿Qué datos tratamos?</h6>
            <p className="small">
              Queremos recordarle que antes de empezar a utilizar cualquiera de
              los servicios que ofrece
              <span className="text-danger fw-bolder"> Lordan Film</span>,
              deberá leer con atención las cláusulas informativas que encontrará
              en los formularios a la hora de completar sus datos personales,
              así como esta política de privacidad.
            </p>
            <p className="small">
              En el caso de no facilitar cierta información personal cuando se
              señale como obligatoria en los formularios de recogida de datos,
              en los campos señalados con asterisco, puede conllevar que no sea
              posible gestionar su registro como usuario, facilitarle
              información institucional o prestarle otro tipo de servicios
              disponibles a través de los diferentes canales habilitados al
              efecto o el uso de determinadas funcionalidades a través de los
              servicios de
              <span className="text-danger fw-bolder"> Lordan Film</span>.
            </p>
            <h6 className="text-uppercase">
              ¿Cuánto tiempo conservamos sus datos?
            </h6>
            <p className="small">
              Conforme al principio de limitación del plazo de conservación que
              establece el RGPD, garantizamos que los datos personales que
              tratamos en
              <span className="text-danger fw-bolder"> Lordan Film</span> serán
              conservados única y exclusivamente durante el tiempo que sea
              necesario para cumplir con la finalidad para la que se recabaron,
              indicadas en el registro de actividades de tratamiento de
              <span className="text-danger fw-bolder"> Lordan Film</span>.
              Pasado este tiempo se conservarán debidamente bloqueados a los
              efectos de determinar las posibles responsabilidades que se
              pudieran derivar de dicha finalidad y del tratamiento de los
              datos. Todo ello mientras no se revoque su consentimiento o no se
              ejerza alguno de los derechos establecidos en la normativa de
              protección de datos vigente. Los datos personales no serán
              tratados ulteriormente de manera incompatible con dichos fines.
            </p>
            <h6 className="text-uppercase">
              ¿Cuáles son sus derechos cuando tratamos sus datos?
            </h6>
            <p className="small">
              La normativa de protección de datos permite que puedas ejercer tus
              derechos de acceso, rectificación, oposición, supresión (“derecho
              al olvido”), limitación del tratamiento, portabilidad y de no ser
              objeto de decisiones individualizadas.
            </p>
            <h6 className="text-uppercase">Derecho de acceso</h6>
            <p className="small">
              El derecho de acceso es tu derecho para conocer si se están
              tratando o no tus datos de carácter personal y, en el caso de que
              se esté realizando dicho tratamiento, obtener una copia de tus
              datos personales que son objeto del tratamiento.
            </p>
            <h6 className="text-uppercase">Derecho de rectificación </h6>
            <p className="small">
              El ejercicio de este derecho supone que podrás obtener la
              rectificación de tus datos personales que sean inexactos
            </p>
            <p className="small">
              En la solicitud deberás indicar a qué datos se refiere y la
              corrección que hay que realizar. Además, cuando sea necesario,
              deberá acompañar su solicitud de la documentación que justifique
              la inexactitud o el carácter incompleto de sus datos.
            </p>
            <h6 className="text-uppercase">Derecho de oposición </h6>
            <p className="small">
              Este derecho supone que se puede oponer a que el responsable
              realice un tratamiento de los datos personales cuando la base
              legal que habilita a
              <span className="text-danger fw-bolder"> Lordan Film</span>. para
              su tratamiento, de las indicadas en el apartado “¿Con qué
              finalidad se tratan los datos y cuál es la base que legitima el
              tratamiento?”, sea el interés legítimo.
            </p>
            <p className="small">
              <span className="text-danger fw-bolder"> Lordan Film</span> dejará
              de tratar los datos salvo que acredite motivos imperiosos que
              prevalezcan sobre los intereses, derechos y libertades del
              interesado, o para la formulación, el ejercicio o la defensa de
              reclamaciones.
            </p>
            <h6 className="text-uppercase">
              Derecho de supresión ("al olvido")
            </h6>
            <p className="small">
              Podrá ejercitar el borrado o la eliminación de sus datos de
              carácter personal cuando, entre otros motivos previstos en el
              RGPD, los datos ya no sean necesarios para los fines para los que
              fueron recabados.
            </p>
            <h6 className="text-uppercase">
              Derecho a la limitación del tratamiento
            </h6>
            <p className="small">
              Este derecho consiste en que obtenga la limitación del tratamiento
              de sus datos personales siempre bajo unas condiciones que se
              establecen legalmente.
            </p>
            <p className="small">
              Los interesados podrán solicitar, en determinadas circunstancias,
              la limitación del tratamiento de sus datos, en cuyo caso,
              únicamente, se conservarán para el ejercicio o la defensa de
              reclamaciones.
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  } else if (tipo == "Políticas de cookies") {
    return (
      <>
        <Modal
          show={props.show}
          onHide={props.onHide}
          size="lg"
          scrollable
          className="text-black">
          <Modal.Header closeButton>
            <Modal.Title className="text-uppercase">{tipo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="small">
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento
              Europeo y del Consejo de 27 de abril de 2016 relativo a la
              protección de las personas físicas en lo que respecta al
              tratamiento de datos personales y a la libre circulación de estos
              datos (en adelante "RGPD"); de la Ley Orgánica 3/2018, de 5 de
              diciembre, de Protección de Datos Personales y garantía de los
              derechos digitales ("LOPD-GDD"); y del art. 22.2 de la Ley
              34/2002, de Servicios de la Sociedad de la Información y Comercio
              Electrónico ("LSSI"), acorde a sus fines de gestión del servicio
              público, queremos informar a los usuarios de que utilizamos
              "cookies" y a continuación facilitamos información necesaria sobre
              su uso.
            </p>
            <p className="small">
              A los efectos de la presente Política de Cookies, debe entenderse
              como "usuario" a toda persona física que proceda al acceso y la
              utilización de las "páginas web y apps" de
              <span className="text-danger fw-bolder"> Lordan Film</span>. Y se
              entenderá como "editor" cualquier entidad prestadora de servicios
              de la sociedad de la información titular de una página web a los
              que puede acceder un usuario y para cuya prestación se utilizan
              cookies. En nuestro caso,
              <span className="text-danger fw-bolder"> Lordan Film</span> es el
              editor de las páginas web y apps titularidad de
              <span className="text-danger fw-bolder"> Lordan Film</span>.
            </p>
            <h6 className="text-uppercase">
              ¿Qué son las cookies y cual es función?
            </h6>
            <p className="small">
              Las cookies son dispositivos de almacenamiento y recuperación de
              datos que se descargan en el dispositivo del usuario (ordenador,
              tablet, smartphone, etc.) al acceder a determinadas páginas web,
              espacios o aplicaciones. Su instalación permite a
              <span className="text-danger fw-bolder"> Lordan Film</span>.
              almacenar ciertos datos (por ejemplo, sobre su dispositivo, sus
              hábitos de navegación o sus preferencias) que podrán ser
              actualizados y recuperados posteriormente con diversas
              finalidades, pudiendo llegar a reconocer al usuario.
            </p>
            <h6 className="text-uppercase">¿Qué tipos de cookies existen?</h6>
            <p className="small">
              Sin perjuicio de que una misma cookie puede estar incluida en más
              de una categoría, con carácter general, las cookies pueden
              clasificarse en tres grandes categorías dependiendo de:
            </p>
            <p className="small">
              - Su origen o la entidad que la gestiona: Según quién sea la
              entidad que gestione el dominio desde donde se envían las cookies
              y trate los datos. Este tipo de cookies pueden subcategorizarse
              como propias (enviadas desde un equipo o dominio gestionado por el
              editor) o de terceros (se envían desde un equipo o dominio que no
              es gestionado por el editor, sino por otra entidad que trata los
              datos obtenidos través de las cookies). En el caso de que las
              cookies sean servidas desde un equipo o dominio gestionado por el
              propio editor, pero la información que se recoja mediante estas
              sea gestionada por un tercero, no pueden ser consideradas como
              cookies propias si el tercero las utiliza para sus propias
              finalidades.
            </p>
            <p className="small">
              - La duración de la cookie: Según el periodo de tiempo en el que
              permanecen activas en el terminal del usuario. Estas cookies
              pueden subcategorizarse como cookies de sesión, es decir, aquellas
              diseñadas para recabar y almacenar datos mientras el usuario
              accede al sitio web, o persistentes, aquellas en las que los datos
              siguen almacenados en el terminal y pueden ser accedidos y
              tratados durante un periodo definido de tiempo.
            </p>
            <p className="small">
              - Su finalidad: Según la finalidad para la que se traten los datos
              obtenidos las cookies pueden subcategorizarse como:
            </p>
            <ul>
              <li> Cookies estrictamente necesarias.</li>
              <li> Cookies de rendimiento.</li>
              <li> Cookies de funcionalidad.</li>
              <li> Cookies dirigidas.</li>
              <li> Contenidos para las redes sociales.</li>
              <li> Medición de audiencias.</li>
              <li> Notificaciones personalizadas.</li>
            </ul>
            <h6 className="text-uppercase">¿Quién utiliza las cookies?</h6>
            <p className="small">
              <span className="text-danger fw-bolder"> Lordan Film</span>.
              ostenta la condición de Responsable del tratamiento en relación
              con los datos personales del usuario que obtenga por medio de la
              instalación de cookies propias en las páginas web y apps de
              <span className="text-danger fw-bolder"> Lordan Film</span> . El
              tratamiento de los datos obtenidos se realiza de conformidad con
              los principios de la protección de datos establecidos en el RGPD,
              en la LOPD-GDD, LSSI y normativa de desarrollo.
            </p>
            <p className="small">
              Queremos destacar que el usuario tiene el control sobre sus datos
              personales y que no utilizaremos cookies a menos que, a estos
              efectos, haya prestado su consentimiento a
              <span className="text-danger fw-bolder"> Lordan Film</span>.
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  } else if (tipo == "Condiciones de uso") {
    return (
      <>
        <Modal
          show={props.show}
          onHide={props.onHide}
          size="lg"
          scrollable
          className="text-black">
          <Modal.Header closeButton>
            <Modal.Title className="text-uppercase">{tipo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="small">
              Estas Condiciones de Uso establecen las normas de acceso y uso de
              la Plataforma, independientemente del dispositivo a través del
              cual se acceda a la Plataforma y de si el usuario se hubiera
              registrado o no.
            </p>
            <h6 className="uppercase">ACEPTACIÓN</h6>
            <p className="small">
              El usuario es cualquier persona que utiliza la Plataforma, aunque
              no se hubiera registrado ni acceda a ningún contenido.
            </p>
            <p className="small">
              El uso de la Plataforma implica la aceptación por parte del
              Usuario de forma plena y sin reservas de las presentes Condiciones
              de Uso, incluida la Política de Privacidad y Cookies, en la
              versión publicada por
              <span className="text-danger fw-bolder"> Lordan Film</span> en el
              momento en el que el Usuario utilice la Plataforma, así como todos
              los avisos, reglamentos de uso e instrucciones puestos en
              conocimiento de los usuarios por parte de
              <span className="text-danger fw-bolder"> Lordan Film</span> y que
              completan o modifican lo previsto en estas Condiciones.
            </p>
            <p className="small">
              <span className="text-danger fw-bolder"> Lordan Film</span> se
              reserva la posibilidad de modificar estas Condiciones de Uso en
              cualquier momento por razones legales, por motivos técnicos,
              cambios en la Plataforma o en la normativa o por decisiones
              corporativas. Cuando esto ocurra
              <span className="text-danger fw-bolder"> Lordan Film</span> podrá
              anunciar los cambios en la Plataforma y si el Usuario continúa
              utilizandola,
              <span className="text-danger fw-bolder"> Lordan Film</span>
              entenderá que el Usuario ha aceptado las modificaciones
              introducidas.
            </p>
            <p className="small">
              <span className="text-danger fw-bolder"> Lordan Film</span>
              recomienda a los Usuarios que lean estas Condiciones de Uso
              periódicamente y confirmen que cada vez que utilizan la Plataforma
              están de acuerdo con lo que en estas Condiciones se establece. La
              versión vigente de las Condiciones de Uso estará siempre
              disponible en el apartado Condiciones de Uso del Portal.
            </p>
            <p className="small">
              Si el Usuario no estuviera de acuerdo con las Condiciones de Uso,
              deberá dejar de utilizar la Plataforma.
            </p>
            <p className="small">
              El usuario declara que tiene dieciocho (18) años o más y que tiene
              la capacidad legal necesaria para aceptar estos términos.
            </p>
            <p className="small">
              Además, si te registras en la Plataforma, o si contratas el acceso
              a los contenidos a través de cualquiera de las modalidades del
              Servicio, serán de aplicación las Condiciones Contractuales, así
              como cualesquiera otras condiciones particulares que en su caso
              sean de aplicación al servicio particular que hubieras contratado
              y que en todo caso
              <span className="text-danger fw-bolder"> Lordan Film</span>
              pondrá en conocimiento del Usuario en el momento de la
              contratación. Esas condiciones particulares completarán las
              presentes Condiciones de Uso y, en caso de discrepancia,
              prevalecerán los términos de las condiciones particulares sobre
              los estipulados en estas Condiciones de Uso.
            </p>
            <h6 className="uppercase">NORMAS DE USO DE LA PLATAFORMA</h6>
            <p className="small">
              El Usuario se compromete a utilizar la Plataforma y todos los
              contenidos que se encuentran en la misma de conformidad con estas
              Condiciones de Uso, la ley, la moral y buenas costumbres
              generalmente aceptadas y el orden público.
            </p>
            <p className="small">Asimismo, el Usuario se compromete a:</p>
            <ul>
              <li>
                utilizar la Plataforma, única y exclusivamente, para fines
                personales y a abstenerse, en consecuencia, de utilizarla para
                cualquier finalidad comercial.
              </li>
              <li>
                hacerlo con una identidad correcta si se registra en
                <span className="text-danger fw-bolder"> Lordan Film</span>,
                absteniéndose de imitar a terceros o realizando cualquier acción
                que pueda confundir a otros usuarios sobre la identidad del
                origen de un mensaje.
              </li>
              <li>
                si se registra en
                <span className="text-danger fw-bolder"> Lordan Film</span>y
                registra algún método de pago, hacerlo solo si el Usuario es el
                titular de la cuenta y/o tiene el derecho legal de usar los
                métodos de pago seleccionados.
              </li>
              <li>
                si se registra en
                <span className="text-danger fw-bolder"> Lordan Film</span>, no
                revelar ni compartir la información de su cuenta de Rakuten con
                terceros.
              </li>
              <li>
                aceptar que puede haber limitaciones geográficas en el Servicio
                debido a restricciones técnicas, legales y de proveedores de
                contenido. Las modalidades del Servicio, el contenido digital y
                la forma en que se ofrece pueden variar con el tiempo y
                dependiendo de la ubicación geográfica del Usuario. Rakuten TV
                utilizará tecnologías para verificar la ubicación geográfica de
                los usuarios. El usuario no utilizará ninguna tecnología para
                ocultar o simular dicha ubicación.
              </li>
              <li>
                aceptar que la calidad de visualización del contenido que se
                transmite puede variar según el modelo de dispositivo utilizado
                y puede verse afectada por muchos factores, incluida la
                velocidad de Internet.
              </li>
              <li>
                aceptar que el Servicio requiere conectividad a Internet.
                Dependiendo del contrato del Usuario con el proveedor de
                Internet, el Usuario puede incurrir en cargos de datos
                adicionales al usar el Servicio.
              </li>
              <li>
                aceptar que algunas modalidades de Servicio pueden ofrecer
                contenido gratis con anuncios, sin necesidad de registrar una
                cuenta. El Usuario acepta compartir algunos datos personales
                para la realización de esta publicidad, de acuerdo con lo que se
                describe en la Política de Privacidad. Si desea obtener más
                información sobre esta práctica o desea conocer más sobre sus
                opciones, puede visitar el sitio web de la Alianza Europea de
                Publicidad Digital Interactiva (EDAA):
                http://www.youronlinechoices.com/goodpractice.
              </li>
              <li>
                aceptar que en algunas modalidades de Servicio el acceso al
                contenido de forma gratuita con anuncios puede estar limitado
                solo a los usuarios que registran una cuenta.
              </li>
              <li>
                aceptar que, en algunas modalidades de Servicio, el acceso al
                contenido de forma gratuita con publicidad puede estar
                restringido a los casos en que el uso de Bloqueadores de
                anuncios esté desactivado.
              </li>
              <li>
                no quebrantar, o intentar quebrantar, las medidas de seguridad o
                autenticación de la Plataforma o de cualquier red conectada a la
                misma.
              </li>
            </ul>
            <h6 className="text-uppercase">GENERAL</h6>
            <p className="small">
              <span className="text-danger fw-bolder"> Lordan Film</span> se
              reserva el derecho de modificar unilateralmente, en cualquier
              momento y sin aviso previo, la presentación y configuración de sus
              servicios, los contenidos y demás funcionalidades de la
              Plataforma, así como las condiciones requeridas para acceder y/o
              utilizar los servicios de
              <span className="text-danger fw-bolder"> Lordan Film</span>, sin
              más requisito que su publicación en el Portal.
            </p>
            <p className="small">
              Asimismo, las características de los servicios ofrecidos por
              <span className="text-danger fw-bolder"> Lordan Film</span> podrán
              verse modificadas con la finalidad de adaptarlos a la evolución
              técnica, pudiendo introducirse variantes en los servicios que
              segmenten el mercado o que incorporen nuevos servicios y/o
              contenidos gratuitos o de pago, así como cualquier mejora técnica
              que permita incorporar un mayor número de prestaciones, en aras de
              la mejora de los servicios.
            </p>
            <p className="small">
              <span className="text-danger fw-bolder"> Lordan Film</span> podrá
              modificar, cancelar y/o suspender, en cualquier momento, temporal
              o definitivamente, a iniciativa propia o a requerimiento de
              tercero, el acceso a sus servicios, en cuyo caso lo comunicará
              previamente a los Usuarios.
            </p>
            <p className="small">
              Los Usuarios pueden presentar sus reclamaciones, quejas e
              incidencias al servicio de atención al Usuario a través de la
              siguiente URL http://ayuda.lordanfilm.film. Para la resolución de
              cualquier reclamación, los usuarios deberán aportar prueba de la
              identidad del reclamante, el contenido de la reclamación y la
              fecha en la que se interpusiera.
            </p>
            <p className="small">
              Los encabezamientos de las distintas cláusulas son sólo
              informativos, y no afectarán la interpretación de las Condiciones
              de Uso.
            </p>
            <p className="small">
              En el caso de existir discrepancias entre lo establecido en las
              presentes Condiciones de Uso y las Condiciones Contractuales u
              otras condiciones particulares que en su caso puedan aplicar en
              función de la modalidad de servicio contratada, prevalecerá lo
              dispuesto en esas últimas.
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  } else if (tipo == "Preguntas frecuentes") {
    return (
      <>
        <Modal
          show={props.show}
          onHide={props.onHide}
          size="lg"
          scrollable
          className="text-black">
          <Modal.Header closeButton>
            <Modal.Title className="text-uppercase">{tipo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item className="border-0" eventKey="0">
                <Accordion.Header className="bg-none">
                  <h6 className="text-uppercase small fw-medium">
                    ¿Qué es Lordan Film?
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="small">
                    Lordan Film es Un proveedor de servicios de streaming basado
                    en suscripción que ofrece streaming en línea de películas.
                    Es una propiedad de un importante estudio de cine. El
                    servicio de streaming comienza como un complemento a las
                    ofertas de Blu-ray, que son suplementos a los programas
                    vistos.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border-0" eventKey="1">
                <Accordion.Header>
                  <h6 className="text-uppercase small fw-medium">
                    ¿Cómo crear, cambiar o eliminar perfiles?
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero necessitatibus sed aliquid dolorum exercitationem,
                    eaque alias blanditiis, ad iure incidunt architecto minima
                    delectus, perspiciatis quaerat obcaecati voluptate? Minus,
                    deserunt itaque.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border-0" eventKey="2">
                <Accordion.Header>
                  <h6 className="text-uppercase small fw-medium">
                    ¿Cómo proteger tu cuenta?
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero necessitatibus sed aliquid dolorum exercitationem,
                    eaque alias blanditiis, ad iure incidunt architecto minima
                    delectus, perspiciatis quaerat obcaecati voluptate? Minus,
                    deserunt itaque.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border-0" eventKey="3">
                <Accordion.Header>
                  <h6 className="text-uppercase small fw-medium">
                    ¿Cómo realizar pago en Lordan Film?
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero necessitatibus sed aliquid dolorum exercitationem,
                    eaque alias blanditiis, ad iure incidunt architecto minima
                    delectus, perspiciatis quaerat obcaecati voluptate? Minus,
                    deserunt itaque.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border-0" eventKey="4">
                <Accordion.Header>
                  <h6 className="text-uppercase small fw-medium">
                    ¿Cómo reactivar mi cuenta de Lordan Film?
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero necessitatibus sed aliquid dolorum exercitationem,
                    eaque alias blanditiis, ad iure incidunt architecto minima
                    delectus, perspiciatis quaerat obcaecati voluptate? Minus,
                    deserunt itaque.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border-0" eventKey="5">
                <Accordion.Header>
                  <h6 className="text-uppercase small fw-medium">
                    ¿Cómo actualizar la información de mi cuenta de Lordan Film?
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero necessitatibus sed aliquid dolorum exercitationem,
                    eaque alias blanditiis, ad iure incidunt architecto minima
                    delectus, perspiciatis quaerat obcaecati voluptate? Minus,
                    deserunt itaque.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border-0" eventKey="6">
                <Accordion.Header>
                  <h6 className="text-uppercase small fw-medium">
                    ¿Cómo cambiar o restablecer tu contraseña?
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero necessitatibus sed aliquid dolorum exercitationem,
                    eaque alias blanditiis, ad iure incidunt architecto minima
                    delectus, perspiciatis quaerat obcaecati voluptate? Minus,
                    deserunt itaque.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Modal.Body>
        </Modal>
      </>
    );
  } else if (tipo == "Centro de ayuda") {
    return (
      <>
        <Modal
          show={props.show}
          onHide={props.onHide}
          size="lg"
          scrollable
          className="text-black">
          <Modal.Header closeButton>
            <Modal.Title className="text-uppercase">{tipo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6 className="text-uppercase">Lorem ipsum dolor sit amet.</h6>
            <p className="small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              laboriosam facilis molestias ullam perspiciatis voluptas
              dignissimos quasi commodi temporibus alias, vitae omnis et
              necessitatibus sint, quod unde officiis! Amet, error?
            </p>
            <p className="small">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur quaerat iure fuga architecto aliquam ipsam maxime
              assumenda sunt corrupti dolore.
            </p>
            <p className="small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              odio suscipit dolores et in voluptatem?
            </p>
            <h6 className="text-uppercase">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur, reiciendis!
            </h6>
            <p className="small">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              unde obcaecati, molestiae velit ex labore. Eligendi ipsam tempore
              repellat, blanditiis veritatis cum assumenda est minima quasi
              beatae. Vero, laborum hic?
            </p>
            <p className="small">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              soluta iste tempora saepe iure! Laudantium obcaecati reiciendis
              assumenda adipisci commodi.
            </p>
            <ol>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti libero, numquam quasi iure mollitia impedit.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique, ipsa. Reprehenderit necessitatibus voluptatem ipsam
                esse voluptas neque rem nam dolores.
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                error repudiandae quis beatae! Laborum quo suscipit quas eveniet
                qui delectus veniam deserunt sunt at animi!
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis dolorum nisi architecto nihil est eius illum ad tempora
                et ipsa!
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis mollitia harum nam recusandae, quis delectus!
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur, sed in! Veritatis veniam quis consectetur pariatur,
                qui necessitatibus accusamus? Voluptates.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus earum ad deleniti laborum dolorum unde voluptates.
                Laboriosam reprehenderit consequatur culpa.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, incidunt eveniet? Id labore neque soluta.
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae in dicta, odit rerum tempore inventore?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam impedit, sit tempore repellat tenetur quae!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium recusandae perferendis suscipit exercitationem,
                corrupti officiis corporis? Minus quod voluptatum similique,
                cum, impedit suscipit ad esse doloribus ab ratione dignissimos
                modi?
              </li>
            </ol>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Aviso;
