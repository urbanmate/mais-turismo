(()=>{
  const replaceTextEverywhere=(oldText,newText)=>{
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[]; let n;
    while((n=walker.nextNode())) if(n.nodeValue.includes(oldText)) nodes.push(n);
    nodes.forEach(node=>{node.nodeValue=node.nodeValue.split(oldText).join(newText)});
  };

  const openingOld='Uma plataforma que amplia quem pode transformar conhecimentos, habilidades, histórias e formas de viver em experiências e renda, e uma operação para levar essa possibilidade a mais pessoas, redes e territórios.';
  const openingNew='A urbanmate abre um caminho para que mais pessoas transformem tempo, conhecimento e habilidades em renda, enquanto conecta pessoas a experiências que revelam novas formas de viver uma cidade.';
  replaceTextEverywhere(openingOld,openingNew);

  const ch4=document.getElementById('chapter-04');
  if(ch4){
    ch4.setAttribute('aria-labelledby','chapter-04-title');
    ch4.innerHTML=`
      <nav aria-label="Do conceito ao mercado" class="subrail">
        <a aria-label="EMPRESA, MARCA E ESTRUTURA" href="#c4-empresa-marca-e-estrutura" title="EMPRESA, MARCA E ESTRUTURA"></a>
        <a aria-label="PRODUTO E TECNOLOGIA" href="#c4-produto-e-tecnologia" title="PRODUTO E TECNOLOGIA"></a>
        <a aria-label="MODELO ECONÔMICO" href="#c4-modelo-economico" title="MODELO ECONÔMICO"></a>
        <a aria-label="MERCADO" href="#c4-mercado" title="MERCADO"></a>
        <a aria-label="O PRÓXIMO MOVIMENTO: AMPLIAR QUEM CONSEGUE CHEGAR" href="#c4-proximo-movimento" title="O PRÓXIMO MOVIMENTO: AMPLIAR QUEM CONSEGUE CHEGAR"></a>
      </nav>
      <div class="chapter-shell"><div aria-hidden="true" class="chapter-kicker" data-chapter="04"></div><div class="chapter-content">
        <h2 class="block chapter-title" id="chapter-04-title">Do conceito ao mercado</h2>
        <div class="block chapter-deck">A urbanmate avançou do conceito para uma estrutura real de empresa e produto.</div>
        <div class="block body">Hoje, reunimos organização formal, marca em processo de registro, tecnologia, modelo econômico, estrutura operacional e uma plataforma em fase final de preparação para entrada pública.</div>
        <div class="block body">Essa construção parte de uma visão clara: <strong>ampliar os caminhos para que pessoas transformem tempo, conhecimento e habilidades em renda e, ao mesmo tempo, ampliar as formas pelas quais outras pessoas descobrem e vivem uma cidade.</strong></div>
        <div class="block body">Agora, entramos na etapa de colocar essa estrutura em operação, começando por <strong>São Paulo e Santiago</strong> e preparando o terreno para que novas pessoas e experiências possam se conectar à plataforma.</div>

        <h3 class="block subhead" id="c4-empresa-marca-e-estrutura">EMPRESA, MARCA E ESTRUTURA</h3>
        <div class="block body"><strong>A urbanmate foi concebida em dezembro de 2025 e, desde então, vem sendo construída de forma contínua até chegar à estrutura empresarial e operacional que possui hoje.</strong></div>
        <div class="block body">Em poucos meses, a ideia avançou para produto, presença pública e formalização da empresa. <strong>Em maio de 2026, a urbanmate colocou no ar sua primeira presença pública, apresentando a proposta ao mercado e abrindo a captação de manifestações de interesse de potenciais Mates e Travelers. Em junho, avançou também na formalização de sua estrutura empresarial.</strong></div>
        <div class="block body">Desde então, o desenvolvimento vem incorporando aprendizados de mercado, conversas com diferentes atores e a participação da urbanmate em ambientes e programas de inovação e turismo, incluindo sua presença no <strong>Web Summit</strong>.</div>
        <div class="block stack">✓ <strong>CNPJ ativo e razão social constituída</strong><br>✓ <strong>domínio próprio e presença digital ativa</strong><br>✓ <strong>pedido de registro da marca urbanmate protocolado no INPI em janeiro de 2026, atualmente aguardando exame de mérito</strong><br>✓ <strong>estrutura administrativa, financeira e contábil organizada</strong><br>✓ <strong>fundador dedicado à construção e preparação da operação</strong><br>✓ <strong>estrutura de pessoas distribuída entre as funções necessárias ao início da operação</strong></div>
        <div class="block body"><strong>A urbanmate ainda não iniciou sua operação comercial. O que está sendo concluído agora é justamente a passagem de uma empresa e um produto já estruturados para o início efetivo da operação.</strong></div>

        <h3 class="block subhead" id="c4-produto-e-tecnologia">PRODUTO E TECNOLOGIA</h3>
        <div class="block body"><strong>A plataforma está em fase final de preparação para entrada pública.</strong></div>
        <div class="block stack">✓ jornadas de Mate e Traveler estruturadas<br>✓ inteligência desenvolvida<br>✓ criação e estruturação de experiências<br>✓ publicação e disponibilidade<br>✓ reserva e pagamento<br>✓ suporte à operação<br>✓ infraestrutura preparada para distribuição nos ambientes Apple e Google</div>

        <h3 class="block subhead" id="c4-modelo-economico">MODELO ECONÔMICO</h3>
        <div class="block body"><strong>A arquitetura econômica parte de uma decisão simples: quem cria define quanto deseja receber.</strong></div>
        <div class="block body">A taxa da urbanmate é adicionada a esse valor para formar o preço final apresentado ao Traveler.</div>
        <div class="block flow"><strong>valor definido pelo Mate + taxa urbanmate = preço final</strong></div>
        <div class="block body">O Mate recebe integralmente o valor que definiu para si, enquanto a taxa da urbanmate remunera a infraestrutura necessária para conectar, comercializar e operar essa experiência.</div>
        <div class="block body"><strong>Autonomia econômica de quem cria + sustentabilidade da infraestrutura.</strong></div>

        <h3 class="block subhead" id="c4-mercado">MERCADO</h3>
        <div class="block body"><strong>A entrada no mercado já está sendo preparada.</strong></div>
        <div class="block stack">✓ landing page no ar<br>✓ manifestações de interesse captadas<br>✓ primeira versão pública em etapa final de preparação<br>✓ São Paulo e Santiago como primeiras cidades de operação</div>
        <div class="block body">Essas duas cidades formam o ponto de partida operacional de uma plataforma concebida para funcionar em diferentes contextos urbanos.</div>

        <h3 class="block subhead" id="c4-proximo-movimento">O PRÓXIMO MOVIMENTO: AMPLIAR QUEM CONSEGUE CHEGAR</h3>
        <div class="block body">A plataforma cria o caminho para quem chega até ela. A <strong>urbanmate Ativa</strong> acrescenta uma segunda capacidade: chegar também a pessoas que talvez ainda não reconheçam uma possibilidade de experiência naquilo que sabem, fazem ou vivem, ou que precisem de apoio para transformá-la em uma oferta capaz de chegar ao mercado.</div>
        <div class="block body">Em vez de depender apenas da chegada espontânea à plataforma, a urbanmate Ativa permite construir esse caminho junto com <strong>redes, territórios e destinos</strong>.</div>
        <div class="block quote">A plataforma sustenta a experiência quando ela chega ao mercado. A urbanmate Ativa amplia os caminhos para que mais pessoas consigam chegar até ele.</div>
      </div></div>`;
  }

  const old11='A urbanmate Ativa vai acontecer. O Mais Turismo pode fazer parte desse começo.';
  const new11='A urbanmate Ativa já faz parte do nosso caminho. Com o Mais Turismo, podemos acelerar esse começo e ampliar o número de pessoas que encontram um caminho até essa nova possibilidade de renda.';
  replaceTextEverywhere(old11,new11);
  const ch11=document.getElementById('chapter-11');
  if(ch11){
    const intro=[...ch11.querySelectorAll('.body')].find(el=>el.textContent.trim().startsWith('Esse produto não depende desta candidatura'));
    if(intro) intro.textContent='A urbanmate Ativa já faz parte da estratégia de crescimento da empresa. O Mais Turismo pode ter um papel importante nesse começo, acelerando a primeira execução estruturada, ampliando o acesso a mais pessoas e ajudando a consolidar um modelo preparado para novas ativações.';
    const nav=ch11.querySelector('.subrail'); if(nav) nav.setAttribute('aria-label',new11);
  }

  const step8=document.getElementById('c8-8-fazer-a-renda-chegar-a-quem-cria');
  if(step8){
    const box=step8.nextElementSibling;
    if(box && box.classList.contains('stack')) box.outerHTML=`<div class="block stack compact-step-eight"><p>Quando a experiência encontra público, a oportunidade econômica chega diretamente à pessoa que a criou. Ela definiu quanto queria receber. A plataforma criou a infraestrutura para que aquela experiência pudesse ser apresentada, reservada, paga e realizada.</p><p>Isso pode significar:</p><div class="compact-list"><span>novas fontes de renda</span><span>mais autonomia econômica</span><span>mais pessoas participando da economia do turismo</span><span>mais valor chegando diretamente a quem cria e realiza experiências</span><span>mais dinheiro circulando dentro das próprias redes e territórios</span></div><p>Não se trata apenas de vender uma experiência. Trata-se de ampliar a possibilidade de uma pessoa monetizar conhecimentos, práticas, habilidades e formas de viver que antes talvez nunca tivessem sido percebidas como atividade econômica.</p></div>`;
  }

  const budgetHead=document.getElementById('c10-r-75-mil-direcionados-a-ativacao-real');
  if(budgetHead && !document.querySelector('.budget-grid')){
    const items=[]; let node=budgetHead.nextElementSibling;
    while(node && node.id!=='c10-total-r-75-000'){
      const next=node.nextElementSibling;
      if(node.classList && node.classList.contains('metric')) items.push(node);
      node=next;
    }
    if(items.length){
      const grid=document.createElement('div'); grid.className='budget-grid block';
      items.forEach(item=>{item.classList.remove('block');item.classList.add('budget-item');grid.appendChild(item)});
      budgetHead.insertAdjacentElement('afterend',grid);
    }
  }

  const old12='Temos produto. Temos estrutura. Estamos prontos para executar.';
  const new12='Temos estrutura para colocar essa proposta em campo';
  replaceTextEverywhere(old12,new12);
  const ch12=document.getElementById('chapter-12');
  if(ch12){
    ch12.setAttribute('aria-labelledby','chapter-12-title');
    ch12.innerHTML=`
      <nav aria-label="Temos estrutura para colocar essa proposta em campo" class="subrail">
        <a aria-label="UMA EMPRESA PRONTA PARA COMEÇAR A OPERAR" href="#c12-empresa-pronta" title="UMA EMPRESA PRONTA PARA COMEÇAR A OPERAR"></a>
        <a aria-label="CAPACIDADE DISTRIBUÍDA ENTRE AS FUNÇÕES QUE A EXECUÇÃO EXIGE" href="#c12-capacidades" title="CAPACIDADE DISTRIBUÍDA ENTRE AS FUNÇÕES QUE A EXECUÇÃO EXIGE"></a>
        <a aria-label="UMA BASE FIXA, COM CAPACIDADE DE INCORPORAR O QUE CADA ATIVAÇÃO EXIGIR" href="#c12-base-fixa" title="UMA BASE FIXA, COM CAPACIDADE DE INCORPORAR O QUE CADA ATIVAÇÃO EXIGIR"></a>
        <a aria-label="O QUE LEVAMOS PARA O MAIS TURISMO" href="#c12-o-que-levamos" title="O QUE LEVAMOS PARA O MAIS TURISMO"></a>
        <a aria-label="PRONTOS PARA FAZER JUNTO" href="#c12-prontos-junto" title="PRONTOS PARA FAZER JUNTO"></a>
        <a aria-label="VAMOS CONVERSAR?" href="#c12-contato" title="VAMOS CONVERSAR?"></a>
      </nav>
      <div class="chapter-shell"><div aria-hidden="true" class="chapter-kicker" data-chapter="12"></div><div class="chapter-content">
        <h2 class="block chapter-title" id="chapter-12-title">Temos estrutura para colocar essa proposta em campo</h2>
        <div class="block chapter-deck">A urbanmate chega ao Mais Turismo como uma empresa já estruturada para iniciar sua operação: organização formal, produto em fase final de preparação para entrada pública, estrutura administrativa e financeira e uma equipe multidisciplinar capaz de sustentar a execução.</div>

        <h3 class="block subhead" id="c12-empresa-pronta">UMA EMPRESA PRONTA PARA COMEÇAR A OPERAR</h3>
        <div class="block body">A urbanmate já possui <strong>CNPJ, razão social, estrutura contábil e financeira, domínio e presença digital</strong>, além do pedido de registro da marca protocolado no INPI.</div>
        <div class="block body">A plataforma está em fase final de preparação para entrada pública, com <strong>São Paulo e Santiago</strong> como primeiras cidades de operação.</div>
        <div class="block quote">A execução não começa com a criação da empresa. A estrutura necessária para começar já existe.</div>

        <h3 class="block subhead" id="c12-capacidades">CAPACIDADE DISTRIBUÍDA ENTRE AS FUNÇÕES QUE A EXECUÇÃO EXIGE</h3>
        <div class="capacity-grid">
          <div class="capacity-card"><strong>ESTRATÉGIA E PRODUTO</strong><span>Fundador dedicado à visão, produto, desenvolvimento do negócio e articulação estratégica.</span></div>
          <div class="capacity-card"><strong>OPERAÇÃO E TERRITÓRIO</strong><span>Preparação do piloto, onboarding, acompanhamento das experiências e operação em São Paulo e Santiago.</span></div>
          <div class="capacity-card"><strong>TECNOLOGIA</strong><span>Desenvolvimento, manutenção e evolução da infraestrutura digital que sustenta Mate e Traveler.</span></div>
          <div class="capacity-card"><strong>COMUNICAÇÃO E RELACIONAMENTO</strong><span>Posicionamento, mobilização, conteúdo, relacionamento e conexão da oferta com o mercado.</span></div>
          <div class="capacity-card"><strong>PESSOAS E TRIAGEM</strong><span>Apoio à organização das pessoas envolvidas, triagem e acompanhamento das necessidades de cada ativação.</span></div>
          <div class="capacity-card"><strong>FINANÇAS, ADMINISTRAÇÃO E CONTABILIDADE</strong><span>Planejamento, controle financeiro, gestão administrativa e suporte contábil à operação.</span></div>
        </div>

        <h3 class="block subhead" id="c12-base-fixa">UMA BASE FIXA, COM CAPACIDADE DE INCORPORAR O QUE CADA ATIVAÇÃO EXIGIR</h3>
        <div class="block body">A urbanmate já possui uma base humana multidisciplinar para sustentar preparação, mobilização, onboarding, acompanhamento operacional e gestão administrativa e financeira.</div>
        <div class="block body">Quando uma ativação exigir conhecimentos específicos, essa estrutura pode incorporar profissionais e especialistas adequados à realidade de cada rede ou território.</div>
        <div class="block quote">A estrutura existe. A composição pode se adaptar à execução.</div>

        <h3 class="block subhead" id="c12-o-que-levamos">O QUE LEVAMOS PARA O MAIS TURISMO</h3>
        <div class="block flow">empresa constituída → estrutura administrativa e financeira → produto em fase final → tecnologia → equipe multidisciplinar → São Paulo + Santiago → urbanmate Ativa estruturada</div>

        <h3 class="block subhead" id="c12-prontos-junto">PRONTOS PARA FAZER JUNTO</h3>
        <div class="block body"><strong>A urbanmate já construiu a base necessária para começar. Com o Mais Turismo, podemos acelerar a urbanmate Ativa, chegar a mais pessoas e colocar essa estrutura a serviço de novas experiências, acesso ao mercado e geração de renda.</strong></div>
        <div class="block body"><strong>Nós levamos produto, tecnologia, método e capacidade de execução. O Mais Turismo pode ampliar o alcance desse começo.</strong></div>
        <div class="block quote">E, juntos, podemos fazer com que mais pessoas encontrem caminhos para transformar o que sabem, fazem e vivem em experiências e renda, enquanto mais pessoas descobrem novas formas de viver uma cidade.</div>

        <h3 class="block subhead" id="c12-contato">VAMOS CONVERSAR?</h3>
        <div class="contact-card block"><div class="contact-name">Wagner Soares</div><div class="contact-role">Fundador · urbanmate</div><div class="contact-links">
          <a href="https://wa.me/5511930831221?text=Ol%C3%A1%2C%20Wagner%21" target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>+55 (11) 93083-1221</strong></a>
          <a href="mailto:wagner@urbanmate.app"><span>E-mail</span><strong>wagner@urbanmate.app</strong></a>
          <a href="https://urbanmate.app/" target="_blank" rel="noopener noreferrer"><span>Site</span><strong>urbanmate.app</strong></a>
        </div></div>
        <div class="final-signature block"><strong>urbanmate</strong><span>Mais pessoas encontrando caminhos para transformar o que sabem, fazem e vivem em experiências e renda. Mais pessoas descobrindo novas formas de viver uma cidade.</span></div>
      </div></div>`;
  }

  document.querySelectorAll('.question-card,.direct-link,.stage-nav a').forEach(el=>{
    if(el.textContent.includes(old11)) el.textContent=el.textContent.replace(old11,new11);
    if(el.textContent.includes(old12)) el.textContent=el.textContent.replace(old12,new12);
  });
})();
