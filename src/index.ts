import type { AstroIntegration } from 'astro'

export interface Option {
  css?: string | string[]
}

const astroCommonIntegration = (option: Option): AstroIntegration => {
  const { css } = option
  const cssImports = (css 
    ? (Array.isArray(css) ? css : [css])
    : []
  )
    .reduce((accu, path) => `${accu}import "${path}"\n`, '')
  return  {
    name: 'astro-common', 
    hooks: {
      "astro:config:setup"({injectScript}) {
        if (cssImports) {
          injectScript('page-ssr', cssImports)
        }
      }
    }
  }
}

export default astroCommonIntegration