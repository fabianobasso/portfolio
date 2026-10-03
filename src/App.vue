<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { content, filtrosTech, perfil, type Lang } from './data'

const img = (nome: string) => `${import.meta.env.BASE_URL}img/${nome}`
const ids = ['inicio', 'servicos', 'sobre', 'experiencia', 'projetos', 'contato']
const capas = ['entregas', 'ponto', 'landing', 'clinica', 'construcao', 'roupas', 'helpdesk', 'sites']

const lang = ref<Lang>('pt')
try {
    const salvo = localStorage.getItem('lang')
    if (salvo === 'en' || salvo === 'pt') lang.value = salvo
} catch { /* sem storage: mantém português */ }
const c = computed(() => content[lang.value])
const t = computed(() => c.value.ui)
const trocar = () => (lang.value = lang.value === 'pt' ? 'en' : 'pt')
watch(lang, (l) => {
    document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en'
    try { localStorage.setItem('lang', l) } catch { /* ignora */ }
}, { immediate: true })

const redes = computed(() => [
    { icone: 'pi-linkedin', nome: 'LinkedIn', href: perfil.linkedin },
    { icone: 'pi-github', nome: 'GitHub', href: perfil.github },
    { icone: 'pi-whatsapp', nome: 'WhatsApp', href: t.value.whatsapp },
    { icone: 'pi-envelope', nome: t.value.email, href: `mailto:${perfil.email}` }
])

const filtro = ref('')
const visiveis = computed(() =>
    c.value.projetos
        .map((p, i) => ({ ...p, capa: capas[i] }))
        .filter((p) => !filtro.value || p.stack.includes(filtro.value))
)

const form = reactive({ nome: '', email: '', interesse: '', mensagem: '' })
const enviar = () => {
    const assunto = encodeURIComponent(`${t.value.mailSub}${form.interesse ? ': ' + form.interesse : ''}`)
    const corpo = encodeURIComponent(`${form.mensagem}\n\n${form.nome}\n${form.email}`)
    window.location.href = `mailto:${perfil.email}?subject=${assunto}&body=${corpo}`
}

const ativa = ref('inicio')
let observer: IntersectionObserver | undefined
onMounted(() => {
    observer = new IntersectionObserver(
        (es) => es.forEach((e) => e.isIntersecting && (ativa.value = e.target.id)),
        { rootMargin: '-30% 0px -60% 0px' }
    )
    ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer?.observe(el)
    })
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
    <div class="site" id="inicio">
        <header class="topbar">
            <a class="logo" href="#inicio">Fabiano Basso</a>
            <nav :aria-label="t.nav[0]">
                <a v-for="(n, i) in t.nav" :key="ids[i]" :href="`#${ids[i]}`" :class="{ active: ativa === ids[i] }">{{ n }}</a>
            </nav>
            <div class="top-actions">
                <button class="lang-btn" type="button" :aria-label="t.trocarRotulo" :title="t.trocarRotulo" @click="trocar">{{ t.trocar }}</button>
                <a class="button" href="#contato">{{ t.falar }}</a>
            </div>
        </header>

        <main>
            <section class="hero wrap" aria-labelledby="hero-title">
                <div class="hero-copy">
                    <div>
                        <p class="eyebrow">{{ t.ola }}</p>
                        <p class="name">{{ perfil.nome }}</p>
                        <h1 id="hero-title">{{ t.h1 }}</h1>
                        <p class="hero-role">{{ t.cargo }}</p>
                    </div>
                    <div class="socials">
                        <a v-for="r in redes" :key="r.nome" class="social" :href="r.href" :aria-label="r.nome" target="_blank" rel="noopener">
                            <i class="pi" :class="r.icone"></i>
                        </a>
                    </div>
                    <div class="hero-actions">
                        <a class="button" :href="t.whatsapp" target="_blank" rel="noopener">{{ t.falar }}</a>
                        <a class="button button-outline" :href="t.cvArquivo" :download="t.cvNome">{{ t.baixar }}</a>
                    </div>
                    <div class="hero-stats">
                        <div v-for="s in t.numeros" :key="s[1]"><strong>{{ s[0] }}</strong><span>{{ s[1] }}</span></div>
                    </div>
                </div>
                <div class="hero-photo">
                    <img class="hero-orbit" :src="img('orbita.svg')" alt="" />
                    <img class="person" :src="img('foto.jpg')" :alt="perfil.nome" />
                </div>
            </section>

            <section id="servicos" class="section wrap">
                <header class="section-title"><h2>{{ t.servicosT }}</h2><p>{{ t.servicosS }}</p></header>
                <div class="service-grid">
                    <article v-for="s in t.servicos" :key="s[0]" class="service-card">
                        <img :src="img('servico.svg')" alt="" />
                        <h3>{{ s[0] }}</h3>
                        <p>{{ s[1] }}</p>
                    </article>
                </div>
            </section>

            <section id="sobre" class="section wrap">
                <header class="section-title"><h2>{{ t.sobreT }}</h2><p>{{ c.resumo.destaque }}</p></header>
                <div class="about-layout">
                    <div class="about-photo"><img :src="img('foto.jpg')" :alt="perfil.nome" /></div>
                    <div class="about-copy">
                        <p v-for="p in c.resumo.texto" :key="p">{{ p }}</p>
                        <a class="button" :href="t.cvArquivo" :download="t.cvNome">
                            <img class="button-icon" :src="img('download.svg')" alt="" />{{ t.baixar }}
                        </a>
                    </div>
                </div>
                <div class="skills">
                    <div v-for="d in t.destaques" :key="d[1]" class="skill">
                        <div class="ring">{{ d[0] }}</div>
                        <strong>{{ d[1] }}</strong>
                        <span>{{ d[2] }}</span>
                    </div>
                </div>
                <div class="chips-sec">
                    <div v-for="g in c.competencias" :key="g.grupo">
                        <h3>{{ g.grupo }}</h3>
                        <ul><li v-for="i in g.itens" :key="i">{{ i }}</li></ul>
                    </div>
                </div>
            </section>

            <section id="experiencia" class="section wrap">
                <header class="section-title"><h2>{{ t.expT }}</h2><p>{{ t.expS }}</p></header>
                <div class="exp-list">
                    <article v-for="e in c.experiencias" :key="e.empresa" class="exp">
                        <p class="when">{{ e.periodo }}</p>
                        <h3>{{ e.cargo }}</h3>
                        <p class="org">{{ e.empresa }}<span v-if="e.contexto"> · {{ e.contexto }}</span></p>
                        <ul><li v-for="i in e.itens" :key="i">{{ i }}</li></ul>
                    </article>
                </div>
                <h3 class="sub-title">{{ t.formT }}</h3>
                <div class="duas-cols">
                    <article v-for="f in c.formacao" :key="f.curso" class="service-card">
                        <h3>{{ f.curso }}</h3>
                        <p>{{ f.onde }} · {{ f.ano }}</p>
                    </article>
                    <article class="service-card">
                        <h3>{{ t.idiomasT }}</h3>
                        <p v-for="i in c.idiomas" :key="i.nome">{{ i.nome }}: {{ i.nivel }}</p>
                    </article>
                    <article class="service-card">
                        <h3>{{ t.adicT }}</h3>
                        <p v-for="a in c.adicional" :key="a.tech">{{ a.tech }} ({{ a.uso }})</p>
                    </article>
                </div>
            </section>

            <section id="projetos" class="section portfolio-section">
                <div class="wrap">
                    <header class="section-title"><h2>{{ t.projT }}</h2><p>{{ t.projS }}</p></header>
                    <div class="filters" :aria-label="t.filtrar">
                        <button type="button" :class="{ selected: !filtro }" @click="filtro = ''">{{ t.todos }}</button>
                        <button v-for="f in filtrosTech" :key="f" type="button" :class="{ selected: filtro === f }" @click="filtro = f">{{ f }}</button>
                    </div>
                    <div class="portfolio-grid">
                        <article v-for="p in visiveis" :key="p.titulo" class="project">
                            <div class="cover">
                                <img :src="img(`capa-${p.capa}.svg`)" alt="" loading="lazy" />
                                <ul><li v-for="s in p.stack" :key="s">{{ s }}</li></ul>
                            </div>
                            <div class="info">
                                <strong>{{ p.titulo }}<em>{{ p.ano }}</em></strong>
                                <p>{{ p.texto }}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section id="contato" class="section wrap contact">
                <header class="section-title"><h2>{{ t.contT }}</h2><p>{{ t.contS }}</p></header>
                <form @submit.prevent="enviar">
                    <input v-model="form.nome" :aria-label="t.nome" :placeholder="t.nome" required />
                    <input v-model="form.email" :aria-label="t.email" type="email" :placeholder="t.email" required />
                    <label class="select-wrap">
                        <span class="sr-only">{{ t.assunto }}</span>
                        <select v-model="form.interesse">
                            <option value="" disabled>{{ t.assunto }}</option>
                            <option v-for="a in t.assuntos" :key="a">{{ a }}</option>
                        </select>
                        <img :src="img('seta.svg')" alt="" />
                    </label>
                    <input :value="perfil.telefone" aria-label="WhatsApp" readonly />
                    <textarea v-model="form.mensagem" :aria-label="t.msg" :placeholder="t.msg" style="grid-column: 1 / -1" required />
                    <div class="form-action">
                        <a class="button button-outline" :href="t.whatsapp" target="_blank" rel="noopener">WhatsApp</a>
                        <button class="button" type="submit">{{ t.enviar }}</button>
                    </div>
                </form>
            </section>
        </main>

        <footer>
            <a class="logo" href="#inicio">Fabiano Basso</a>
            <nav :aria-label="t.nav[0]">
                <a v-for="(n, i) in t.nav" :key="ids[i]" :href="`#${ids[i]}`">{{ n }}</a>
            </nav>
            <div class="socials">
                <a v-for="r in redes" :key="r.nome" class="social" :href="r.href" :aria-label="r.nome" target="_blank" rel="noopener">
                    <i class="pi" :class="r.icone"></i>
                </a>
            </div>
            <div class="footer-contact">
                <a :href="`mailto:${perfil.email}`"><img :src="img('email.svg')" alt="" />{{ perfil.email }}</a>
                <a href="tel:+5548988169638"><img :src="img('fone.svg')" alt="" />{{ perfil.telefone }}</a>
            </div>
            <p class="copyright">© {{ new Date().getFullYear() }} {{ perfil.nome }} · {{ t.local }}</p>
        </footer>
    </div>
</template>
