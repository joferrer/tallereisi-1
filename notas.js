
// Eliminar commits.
//git reset --hard HEAD~1 -> Eliminar ultimo commit.  

/**
 * Commits 
 * 1. git log ->Ultimos commits. 
 */

/**
 * Ramas.
 * 
 * 1. git branch ramaPrueba -> Crear una rama de prueba.
 * 2. git checkout ramaPrueba -> Conectarse a una rama de prueba.
 * 3. git checkout master -> Devolverse a la master.
 * 
 */


/**
 * Merge
 * 
 *  1. ME PARO EN LA RAMA A LA CUAL VOY A TRAER LOS CAMBIOS
 *  2. git merge RAMA_DE_ORIGEN
 *      Ej: git merge ramaPrueba -> Trae los cambios de ramaPrueba a la Master.
 */


/**
 * Loggeo 
 *  1. Logear -> gh auth login 
 *  2. Status -> gh auth status
 *  3. No se que es -> gh auth setup-git
 *  4. Logout -> gh auth logout  
 * 
 */


/**
 * Escribiendo commits 
 *  Es importante hacer commits expresivos de los cambios que se hicieron. 
 *  Pagina: https://www.conventionalcommits.org/en/v1.0.0/
 *  
 *  Tipos de commits:
 *  
 *  1. Fix --> Repararaciones. 
 *  2. Feat --> features: funcionalidades al software. 
 *              Feat! -> breaking change , cambio que rompio la funcionalidad. 
 * 
 *  3. docs --> Cambios en la documentanción del proyecto. (README.md)
 *  4. Refactor --> Cambios en la estruptura sin cambiar la funcionalidad. 
 *  5. Perl --> Commits orientado a mejorar la performance del código. 
 *  6. Test --> Pruebas.
 * 
 *  Estructura: 
 * 
 * <type>[optional scope]: <description>
 * [optional body]
 * [optional footer(s)]
 * 
 *  docs: Se incluye notas de los temas del taller. 
 *  
 *  
 */