class Analisis {
    constructor(reset = false) {
        if(reset){
            // var jsonPreguntas = [
            //     {"numero":"01", "valor": `this.fnConvierte(document.frmPreg01.preg01.value)`, "opcion":0, "default":1,"descripcion":"1. Soy capaz de organizar ideas, tareas, gente y tiempo para el servicio cristiano."},
            //     {"numero":"02", "valor": `this.fnConvierte(document.frmPreg02.preg02.value)`, "opcion":0, "default":5, "descripcion":"2. He usado una habilidad creativa específica (escribir, pintar, actuar, etc.) para beneficio del cuerpo de Cristo."},
            //     {"numero":"03", "valor": `this.fnConvierte(document.frmPreg03.preg03.value)`, "opcion":0, "default":4, "descripcion":"3. Soy capaz de distinguir entre la verdad y el error espiritual."},
            //     {"numero":"04", "valor": `this.fnConvierte(document.frmPreg04.preg04.value)`, "opcion":0, "default":4, "descripcion":"4. He animado a otros a vivir como Cristo."},
            //     {"numero":"05", "valor": `this.fnConvierte(document.frmPreg05.preg05.value)`, "opcion":0, "default":4, "descripcion":"5. Me gusta hablar de Jesús a las personas que no lo conocen."},
            //     {"numero":"06", "valor": `this.fnConvierte(document.frmPreg06.preg06.value)`, "opcion":0, "default":3, "descripcion":"6. He tenido la experiencia de saber con seguridad la voluntad de Dios en situaciones específicas, aun cuando la evidencia no era muy clara."},
            //     {"numero":"07", "valor": `this.fnConvierte(document.frmPreg07.preg07.value)`, "opcion":0, "default":1, "descripcion":"7. He asumido la responsabilidad de satisfacer necesidades financieras en la iglesia y la comunidad."},
            //     {"numero":"08", "valor": `this.fnConvierte(document.frmPreg08.preg08.value)`, "opcion":0, "default":1, "descripcion":"8. Disfruto proveyendo de alojamiento para invitados y no me molestan las visitas inesperadas."},
            //     {"numero":"09", "valor": `this.fnConvierte(document.frmPreg09.preg09.value)`, "opcion":0, "default":2, "descripcion":"9. Tomo los motivos de oración de otras personas seriamente y continúo orando por ellos."},
            //     {"numero":"10", "valor": `this.fnConvierte(document.frmPreg10.preg10.value)`, "opcion":0, "default":3, "descripcion":"10. Motivo a los grupos a cumplir objetivos bíblicos específicos."},
            //     {"numero":"11", "valor": `this.fnConvierte(document.frmPreg11.preg11.value)`, "opcion":0, "default":3, "descripcion":"11. Tengo la habilidad de cambiar sentimientos de compasión en gozosas acciones de bondad."},
            //     {"numero":"12", "valor": `this.fnConvierte(document.frmPreg12.preg12.value)`, "opcion":0, "default":2, "descripcion":"12. He abogado por la causa de Dios delante de la iglesia del mundo."},
            //     {"numero":"13", "valor": `this.fnConvierte(document.frmPreg13.preg13.value)`, "opcion":0, "default":4, "descripcion":"13. Disfruto haciendo cosas que ayudan a otros a ministrar más efectivamente."},
            //     {"numero":"14", "valor": `this.fnConvierte(document.frmPreg14.preg14.value)`, "opcion":0, "default":4, "descripcion":"14. Me he responsabilizado de la vida espiritual de otros creyentes con muy buenos resultados."},
            //     {"numero":"15", "valor": `this.fnConvierte(document.frmPreg15.preg15.value)`, "opcion":0, "default":4, "descripcion":"15. El contenido de mi clase es claro para los estudiantes."},
            //     {"numero":"16", "valor": `this.fnConvierte(document.frmPreg16.preg16.value)`, "opcion":0, "default":2, "descripcion":"16. Me gusta planear actividades en las que la gente se involucre."},
            //     {"numero":"17", "valor": `this.fnConvierte(document.frmPreg17.preg17.value)`, "opcion":0, "default":5, "descripcion":"17. Me gusta expresarme en forma creativa para Dios a través del arte (música, drama, poesía, etc.)"},
            //     {"numero":"18", "valor": `this.fnConvierte(document.frmPreg18.preg18.value)`, "opcion":0, "default":3, "descripcion":"18. Veo un serio peligro cuando falsas doctrinas y enseñanzas se infiltran en la iglesia."},
            //     {"numero":"19", "valor": `this.fnConvierte(document.frmPreg19.preg19.value)`, "opcion":0, "default":2, "descripcion":"19. Soy sensible al sufrimiento, problemas y desánimo de la gente y trato de ayudarlas buscando las respuestas que Dios ofrece a sus problemas."},
            //     {"numero":"20", "valor": `this.fnConvierte(document.frmPreg20.preg20.value)`, "opcion":0, "default":4, "descripcion":"20. Me gustaría compartir el evangelio libre y efectivamente con personas no creyentes."},
            //     {"numero":"21", "valor": `this.fnConvierte(document.frmPreg21.preg21.value)`, "opcion":0, "default":3, "descripcion":"21. Acepto tal cual las promesas de Dios y las aplico a situaciones específicas sin ninguna duda."},
            //     {"numero":"22", "valor": `this.fnConvierte(document.frmPreg22.preg22.value)`, "opcion":0, "default":2, "descripcion":"22. Me siento motivado a dar cuando veo situaciones de necesidad financiera en el reino de Dios."},
            //     {"numero":"23", "valor": `this.fnConvierte(document.frmPreg23.preg23.value)`, "opcion":0, "default":1, "descripcion":"23. Soy amable y sensitivo con las visitas y los extraños, lo que los hace sentirse bien."},
            //     {"numero":"24", "valor": `this.fnConvierte(document.frmPreg24.preg24.value)`, "opcion":0, "default":3, "descripcion":"24. Soy sensitivo a las necesidades de oración de otras personas y trato de apoyarlas en oración."},
            //     {"numero":"25", "valor": `this.fnConvierte(document.frmPreg25.preg25.value)`, "opcion":0, "default":4, "descripcion":"25. Tengo el deseo de ayudar, dirigir y guiar a otras personas en un ministerio importante de la iglesia."},
            //     {"numero":"26", "valor": `this.fnConvierte(document.frmPreg26.preg26.value)`, "opcion":0, "default":1, "descripcion":"26. Me gustaría ministrar a los inválidos o a los que tienen retraso mentales."},
            //     {"numero":"27", "valor": `this.fnConvierte(document.frmPreg27.preg27.value)`, "opcion":0, "default":3, "descripcion":"27. La escritura me provee de entendimiento en cuanto a la gente y a situaciones sobre las que gustaría hablar."},
            //     {"numero":"28", "valor": `this.fnConvierte(document.frmPreg28.preg28.value)`, "opcion":0, "default":2, "descripcion":"28. Sé cuando otras personas necesitan ayuda y siempre tengo la disposición de ayudarles."},
            //     {"numero":"29", "valor": `this.fnConvierte(document.frmPreg29.preg29.value)`, "opcion":0, "default":4, "descripcion":"29. Quiero satisfacer las necesidades espirituales de los creyentes, por lo que me gusta participar en ministerios de edificación y discipulado."},
            //     {"numero":"30", "valor": `this.fnConvierte(document.frmPreg30.preg30.value)`, "opcion":0, "default":4, "descripcion":"30. Me gusta ayudar a las personas a entender cosas."},
            //     {"numero":"31", "valor": `this.fnConvierte(document.frmPreg31.preg31.value)`, "opcion":0, "default":2, "descripcion":"31. Soy capaz de elaborar planes efectivos para cumplir objetivos."},
            //     {"numero":"32", "valor": `this.fnConvierte(document.frmPreg32.preg32.value)`, "opcion":0, "default":5, "descripcion":"32. Tengo habilidades artísticas (música, drama, escribir, pintura, escultura, etc.) las cuales he puesto a disposición del reino de Dios."},
            //     {"numero":"33", "valor": `this.fnConvierte(document.frmPreg33.preg33.value)`, "opcion":0, "default":3, "descripcion":"33. Me doy cuenta de las personas o doctrinas falsas y manipuladoras cuando otros no se dan cuenta."},
            //     {"numero":"34", "valor": `this.fnConvierte(document.frmPreg34.preg34.value)`, "opcion":0, "default":3, "descripcion":"34. Personas de mi iglesia han sido animadas a amar y a actuar correctamente después de recibir mi consejo."},
            //     {"numero":"35", "valor": `this.fnConvierte(document.frmPreg35.preg35.value)`, "opcion":0, "default":3, "descripcion":"35. He llevado a otras personas a conocer a Jesús como su Salvador."},
            //     {"numero":"36", "valor": `this.fnConvierte(document.frmPreg36.preg36.value)`, "opcion":0, "default":3, "descripcion":"36. En situaciones específicas, Dios me ha dado la seguridad de que va a actuar en formas que parecen imposibles."},
            //     {"numero":"37", "valor": `this.fnConvierte(document.frmPreg37.preg37.value)`, "opcion":0, "default":1, "descripcion":"37. Doy generosa y libremente para apoyar la obra de Dios."},
            //     {"numero":"38", "valor": `this.fnConvierte(document.frmPreg38.preg38.value)`, "opcion":0, "default":1, "descripcion":"38. Tengo la habilidad de hacer que los extraños se sientan bienvenidos en mi hogar y en mi iglesia."},
            //     {"numero":"39", "valor": `this.fnConvierte(document.frmPreg39.preg39.value)`, "opcion":0, "default":4, "descripcion":"39. Oro por otras personas, con la conciencia de que su efectividad en lo que hacen depende de la oración."},
            //     {"numero":"40", "valor": `this.fnConvierte(document.frmPreg40.preg40.value)`, "opcion":0, "default":3, "descripcion":"40. Disfruto dirigiendo a otros al cumplimiento de objetivos que contribuyen a la causa de Cristo."},
            //     {"numero":"41", "valor": `this.fnConvierte(document.frmPreg41.preg41.value)`, "opcion":0, "default":1, "descripcion":"41. Disfruto trabajando con gente que sufre problemas físicos, mentales o emocionales."},
            //     {"numero":"42", "valor": `this.fnConvierte(document.frmPreg42.preg42.value)`, "opcion":0, "default":3, "descripcion":"42. He proclamado mensajes urgentes de la Palabra de Dios."},
            //     {"numero":"43", "valor": `this.fnConvierte(document.frmPreg43.preg43.value)`, "opcion":0, "default":4, "descripcion":"43. Me gusta trabajar en cosas pequeñas que contribuyen a la edificación del cuerpo de Cristo."},
            //     {"numero":"44", "valor": `this.fnConvierte(document.frmPreg44.preg44.value)`, "opcion":0, "default":3, "descripcion":"44. Me siento responsable cuando veo a una persona cristiana extraviarse."},
            //     {"numero":"45", "valor": `this.fnConvierte(document.frmPreg45.preg45.value)`, "opcion":0, "default":4, "descripcion":"45. Soy capaz de clarificar cosas para aprendices (niños o adultos)."},
            //     {"numero":"46", "valor": `this.fnConvierte(document.frmPreg46.preg46.value)`, "opcion":0, "default":2, "descripcion":"46. Disfruto supervisando ministerios importantes de la iglesia."},
            //     {"numero":"47", "valor": `this.fnConvierte(document.frmPreg47.preg47.value)`, "opcion":0, "default":5, "descripcion":"47. Tengo capacidad de ser creativo en áreas que contribuyen al desarrollo de la iglesia."},
            //     {"numero":"48", "valor": `this.fnConvierte(document.frmPreg48.preg48.value)`, "opcion":0, "default":3, "descripcion":"48. Tengo la capacidad de mirar debajo de las apariencias y detectar las motivaciones de las preguntas."},
            //     {"numero":"49", "valor": `this.fnConvierte(document.frmPreg49.preg49.value)`, "opcion":0, "default":4, "descripcion":"49. Creo que la gente crece y madura espiritualmente a través de la consegería e instrucción en la Palabra."},
            //     {"numero":"50", "valor": `this.fnConvierte(document.frmPreg50.preg50.value)`, "opcion":0, "default":4, "descripcion":"50. Me preocupan las amistades que no conocen de Cristo."},
            //     {"numero":"51", "valor": `this.fnConvierte(document.frmPreg51.preg51.value)`, "opcion":0, "default":3, "descripcion":"51. Percibo el momento cuando la oración de fe es necesaria."},
            //     {"numero":"52", "valor": `this.fnConvierte(document.frmPreg52.preg52.value)`, "opcion":0, "default":3, "descripcion":"52. Estoy dispuesto a vivir en forma sencilla para contribuir con mi dinero al crecimiento del reino."},
            //     {"numero":"53", "valor": `this.fnConvierte(document.frmPreg53.preg53.value)`, "opcion":0, "default":3, "descripcion":"53. Tiendo a estar más consciente de las necesidades de mis invitados que de las mías."},
            //     {"numero":"54", "valor": `this.fnConvierte(document.frmPreg54.preg54.value)`, "opcion":0, "default":5, "descripcion":"54. Tengo la convicción personal de que Dios contesta la oración de fe, y quiero que me use para ayudar a otros a través de mi oración."},
            //     {"numero":"55", "valor": `this.fnConvierte(document.frmPreg55.preg55.value)`, "opcion":0, "default":4, "descripcion":"55. Si tengo la oportunidad, me gustaría dirigir y motivar a otras personas en algún aspecto de la obra de Dios."},
            //     {"numero":"56", "valor": `this.fnConvierte(document.frmPreg56.preg56.value)`, "opcion":0, "default":4, "descripcion":"56. Ver la miseria me lleva a expresar el amor de Dios a las personas que sufren."},
            //     {"numero":"57", "valor": `this.fnConvierte(document.frmPreg57.preg57.value)`, "opcion":0, "default":4, "descripcion":"57. Si se da la oportunidad, me gustaría ser un predicador expositivo de la Palabra de Dios."},
            //     {"numero":"58", "valor": `this.fnConvierte(document.frmPreg58.preg58.value)`, "opcion":0, "default":3, "descripcion":"58. Es parte de mi naturaleza hacer el trabajo que ayude a otras personas a hacer el suyo."},
            //     {"numero":"59", "valor": `this.fnConvierte(document.frmPreg59.preg59.value)`, "opcion":0, "default":5, "descripcion":"59. Cuando me entero de gente que necesita orientación espiritual, surge en mí el instinto pastoral."},
            //     {"numero":"60", "valor": `this.fnConvierte(document.frmPreg60.preg60.value)`, "opcion":0, "default":5, "descripcion":"60. Con facilidad me doy cuenta cuando la gente (niños o adultos) no tienen un pensamiento claro."},
            //     {"numero":"61", "valor": `this.fnConvierte(document.frmPreg61.preg61.value)`, "opcion":0, "default":2, "descripcion":"61. Tengo la habilidad de delegar cosas importantes a la persona adecuada, en el momento preciso."},
            //     {"numero":"62", "valor": `this.fnConvierte(document.frmPreg62.preg62.value)`, "opcion":0, "default":5, "descripcion":"62. Estoy consciente de que he sido de bendición para otros a través de mis habilidades artísticas."},
            //     {"numero":"63", "valor": `this.fnConvierte(document.frmPreg63.preg63.value)`, "opcion":0, "default":3, "descripcion":"63. He desarrollado una habilidad para discriminar entre lo bueno y lo malo en el mundo de hoy."},
            //     {"numero":"64", "valor": `this.fnConvierte(document.frmPreg64.preg64.value)`, "opcion":0, "default":5, "descripcion":"64. Me siento contento cuando personas que necesitan ánimo, consuelo o apoyo, buscan mi ayuda."},
            //     {"numero":"65", "valor": `this.fnConvierte(document.frmPreg65.preg65.value)`, "opcion":0, "default":4, "descripcion":"65. Soy capaz de compartir el evangelio en una forma clara y significativa para lo que no creen"},
            //     {"numero":"66", "valor": `this.fnConvierte(document.frmPreg66.preg66.value)`, "opcion":0, "default":4, "descripcion":"66. Soy capaz de seguir creyendo de que Dios actuará a pesar de que la evidencia indique lo contrario."},
            //     {"numero":"67", "valor": `this.fnConvierte(document.frmPreg67.preg67.value)`, "opcion":0, "default":1, "descripcion":"67. Cuando ayudo a la gente, el Señor obra a través de contribuciones generosas y oportunas."},
            //     {"numero":"68", "valor": `this.fnConvierte(document.frmPreg68.preg68.value)`, "opcion":0, "default":1, "descripcion":"68. Mi hogar está disponible para aquellos que necesiten ser hospedados."},
            //     {"numero":"69", "valor": `this.fnConvierte(document.frmPreg69.preg69.value)`, "opcion":0, "default":5, "descripcion":"69. Estoy consciente de que ministro a otros cuando oro por ellos."},
            //     {"numero":"70", "valor": `this.fnConvierte(document.frmPreg70.preg70.value)`, "opcion":0, "default":4, "descripcion":"70. He aceptado responsabilidades de liderazgo y he tenido éxito en ayudar a un grupo a trabajar para el cumplimiento de un objetivo."},
            //     {"numero":"71", "valor": `this.fnConvierte(document.frmPreg71.preg71.value)`, "opcion":0, "default":1, "descripcion":"71. Me doy cuenta que realmente puedo ayudar a las personas enfermas, necesitadas o recluidas."},
            //     {"numero":"72", "valor": `this.fnConvierte(document.frmPreg72.preg72.value)`, "opcion":0, "default":3, "descripcion":"72. Dios me utiliza para animar, edificar y consolar a otros hablándoles de cosas espirituales."},
            //     {"numero":"73", "valor": `this.fnConvierte(document.frmPreg73.preg73.value)`, "opcion":0, "default":2, "descripcion":"73. Encuentro formas prácticas de ayudar a otras personas y me siento satisfecho haciéndolo."},
            //     {"numero":"74", "valor": `this.fnConvierte(document.frmPreg74.preg74.value)`, "opcion":0, "default":3, "descripcion":"74. Dios me ha utilizado para cuidar, guiar y edificar a otros creyentes y contribuir a su madurez espiritual."},
            //     {"numero":"75", "valor": `this.fnConvierte(document.frmPreg75.preg75.value)`, "opcion":0, "default":3, "descripcion":"75. Capto el interés de quienes enseño."},
            //     {"numero":"76", "valor": `this.fnConvierte(document.frmPreg76.preg76.value)`, "opcion":0, "default":1, "descripcion":"76. Sé cuándo y cómo un proyecto o ministerio necesita organizarse mejor."},
            //     {"numero":"77", "valor": `this.fnConvierte(document.frmPreg77.preg77.value)`, "opcion":0, "default":5, "descripcion":"77. Tengo una habilidad latente y creativa (en dibujo, escritura, música, etc.) que me gustaría utilizar para el beneficio del reino de Dios."},
            //     {"numero":"78", "valor": `this.fnConvierte(document.frmPreg78.preg78.value)`, "opcion":0, "default":2, "descripcion":"78. Generalmente me doy cuenta cuando la gente finge ser lo que no es."},
            //     {"numero":"79", "valor": `this.fnConvierte(document.frmPreg79.preg79.value)`, "opcion":0, "default":4, "descripcion":"79. Estoy dispuesto a invertir tiempo semanalmente en el ministerio de consejería."},
            //     {"numero":"80", "valor": `this.fnConvierte(document.frmPreg80.preg80.value)`, "opcion":0, "default":3, "descripcion":"80. Me entristece el que una persona no conozca de Cristo."},
            //     {"numero":"81", "valor": `this.fnConvierte(document.frmPreg81.preg81.value)`, "opcion":0, "default":4, "descripcion":"81. Realmente creo en las palabras de Jesús, cuando dijo que la fe mueve montañas."},
            //     {"numero":"82", "valor": `this.fnConvierte(document.frmPreg82.preg82.value)`, "opcion":0, "default":5, "descripcion":"82. Tengo la convicción de que todo lo que poseo pertenece a Dios y deseo ser un buen mayordomo."},
            //     {"numero":"83", "valor": `this.fnConvierte(document.frmPreg83.preg83.value)`, "opcion":0, "default":3, "descripcion":"83. Tengo un aprecio genuino por cada invitado a quien atiendo."},
            //     {"numero":"84", "valor": `this.fnConvierte(document.frmPreg84.preg84.value)`, "opcion":0, "default":5, "descripcion":"84. Me alegraría que me inviten a orar por alguna persona involucrada en el ministerio."},
            //     {"numero":"85", "valor": `this.fnConvierte(document.frmPreg85.preg85.value)`, "opcion":0, "default":5, "descripcion":"85. Me doy cuenta rápidamente cuando un grupo del que formo parte está perdiendo el tiempo y trato de hacer algo."},
            //     {"numero":"86", "valor": `this.fnConvierte(document.frmPreg86.preg86.value)`, "opcion":0, "default":2, "descripcion":"86. Me doy cuenta cuando alguien ha sido lastimado de alguna forma."},
            //     {"numero":"87", "valor": `this.fnConvierte(document.frmPreg87.preg87.value)`, "opcion":0, "default":5, "descripcion":"87. Creo que más cristianos deberían hablar acerca de temas como el aborto, la promiscuidad, el racismo, etc."},
            //     {"numero":"88", "valor": `this.fnConvierte(document.frmPreg88.preg88.value)`, "opcion":0, "default":4, "descripcion":"88. Desearía tener más oportunidades de ayudar a otras personas en el ejercicio de sus ministerios."},
            //     {"numero":"89", "valor": `this.fnConvierte(document.frmPreg89.preg89.value)`, "opcion":0, "default":4, "descripcion":"89. Me gustaría tener la oportunidad de capacitar a los santos para la obra del ministerio."},
            //     {"numero":"90", "valor": `this.fnConvierte(document.frmPreg90.preg90.value)`, "opcion":0, "default":5, "descripcion":"90. Me encanta descubrir nuevas ideas que puedo compartir con otras personas."}
            // ];
            var jsonPreguntas = [
                {"numero":"01", "valor": `this.fnConvierte(document.frmPreg01.preg01.value)`, "opcion":0, "default":0,"descripcion":"1. Soy capaz de organizar ideas, tareas, gente y tiempo para el servicio cristiano."},
                {"numero":"02", "valor": `this.fnConvierte(document.frmPreg02.preg02.value)`, "opcion":0, "default":0, "descripcion":"2. He usado una habilidad creativa específica (escribir, pintar, actuar, etc.) para beneficio del cuerpo de Cristo."},
                {"numero":"03", "valor": `this.fnConvierte(document.frmPreg03.preg03.value)`, "opcion":0, "default":0, "descripcion":"3. Soy capaz de distinguir entre la verdad y el error espiritual."},
                {"numero":"04", "valor": `this.fnConvierte(document.frmPreg04.preg04.value)`, "opcion":0, "default":0, "descripcion":"4. He animado a otros a vivir como Cristo."},
                {"numero":"05", "valor": `this.fnConvierte(document.frmPreg05.preg05.value)`, "opcion":0, "default":0, "descripcion":"5. Me gusta hablar de Jesús a las personas que no lo conocen."},
                {"numero":"06", "valor": `this.fnConvierte(document.frmPreg06.preg06.value)`, "opcion":0, "default":0, "descripcion":"6. He tenido la experiencia de saber con seguridad la voluntad de Dios en situaciones específicas, aun cuando la evidencia no era muy clara."},
                {"numero":"07", "valor": `this.fnConvierte(document.frmPreg07.preg07.value)`, "opcion":0, "default":0, "descripcion":"7. He asumido la responsabilidad de satisfacer necesidades financieras en la iglesia y la comunidad."},
                {"numero":"08", "valor": `this.fnConvierte(document.frmPreg08.preg08.value)`, "opcion":0, "default":0, "descripcion":"8. Disfruto proveyendo de alojamiento para invitados y no me molestan las visitas inesperadas."},
                {"numero":"09", "valor": `this.fnConvierte(document.frmPreg09.preg09.value)`, "opcion":0, "default":0, "descripcion":"9. Tomo los motivos de oración de otras personas seriamente y continúo orando por ellos."},
                {"numero":"10", "valor": `this.fnConvierte(document.frmPreg10.preg10.value)`, "opcion":0, "default":0, "descripcion":"10. Motivo a los grupos a cumplir objetivos bíblicos específicos."},
                {"numero":"11", "valor": `this.fnConvierte(document.frmPreg11.preg11.value)`, "opcion":0, "default":0, "descripcion":"11. Tengo la habilidad de cambiar sentimientos de compasión en gozosas acciones de bondad."},
                {"numero":"12", "valor": `this.fnConvierte(document.frmPreg12.preg12.value)`, "opcion":0, "default":0, "descripcion":"12. He abogado por la causa de Dios delante de la iglesia del mundo."},
                {"numero":"13", "valor": `this.fnConvierte(document.frmPreg13.preg13.value)`, "opcion":0, "default":0, "descripcion":"13. Disfruto haciendo cosas que ayudan a otros a ministrar más efectivamente."},
                {"numero":"14", "valor": `this.fnConvierte(document.frmPreg14.preg14.value)`, "opcion":0, "default":0, "descripcion":"14. Me he responsabilizado de la vida espiritual de otros creyentes con muy buenos resultados."},
                {"numero":"15", "valor": `this.fnConvierte(document.frmPreg15.preg15.value)`, "opcion":0, "default":0, "descripcion":"15. El contenido de mi clase es claro para los estudiantes."},
                {"numero":"16", "valor": `this.fnConvierte(document.frmPreg16.preg16.value)`, "opcion":0, "default":0, "descripcion":"16. Me gusta planear actividades en las que la gente se involucre."},
                {"numero":"17", "valor": `this.fnConvierte(document.frmPreg17.preg17.value)`, "opcion":0, "default":0, "descripcion":"17. Me gusta expresarme en forma creativa para Dios a través del arte (música, drama, poesía, etc.)"},
                {"numero":"18", "valor": `this.fnConvierte(document.frmPreg18.preg18.value)`, "opcion":0, "default":0, "descripcion":"18. Veo un serio peligro cuando falsas doctrinas y enseñanzas se infiltran en la iglesia."},
                {"numero":"19", "valor": `this.fnConvierte(document.frmPreg19.preg19.value)`, "opcion":0, "default":0, "descripcion":"19. Soy sensible al sufrimiento, problemas y desánimo de la gente y trato de ayudarlas buscando las respuestas que Dios ofrece a sus problemas."},
                {"numero":"20", "valor": `this.fnConvierte(document.frmPreg20.preg20.value)`, "opcion":0, "default":0, "descripcion":"20. Me gustaría compartir el evangelio libre y efectivamente con personas no creyentes."},
                {"numero":"21", "valor": `this.fnConvierte(document.frmPreg21.preg21.value)`, "opcion":0, "default":0, "descripcion":"21. Acepto tal cual las promesas de Dios y las aplico a situaciones específicas sin ninguna duda."},
                {"numero":"22", "valor": `this.fnConvierte(document.frmPreg22.preg22.value)`, "opcion":0, "default":0, "descripcion":"22. Me siento motivado a dar cuando veo situaciones de necesidad financiera en el reino de Dios."},
                {"numero":"23", "valor": `this.fnConvierte(document.frmPreg23.preg23.value)`, "opcion":0, "default":0, "descripcion":"23. Soy amable y sensitivo con las visitas y los extraños, lo que los hace sentirse bien."},
                {"numero":"24", "valor": `this.fnConvierte(document.frmPreg24.preg24.value)`, "opcion":0, "default":0, "descripcion":"24. Soy sensitivo a las necesidades de oración de otras personas y trato de apoyarlas en oración."},
                {"numero":"25", "valor": `this.fnConvierte(document.frmPreg25.preg25.value)`, "opcion":0, "default":0, "descripcion":"25. Tengo el deseo de ayudar, dirigir y guiar a otras personas en un ministerio importante de la iglesia."},
                {"numero":"26", "valor": `this.fnConvierte(document.frmPreg26.preg26.value)`, "opcion":0, "default":0, "descripcion":"26. Me gustaría ministrar a los inválidos o a los que tienen retraso mentales."},
                {"numero":"27", "valor": `this.fnConvierte(document.frmPreg27.preg27.value)`, "opcion":0, "default":0, "descripcion":"27. La escritura me provee de entendimiento en cuanto a la gente y a situaciones sobre las que gustaría hablar."},
                {"numero":"28", "valor": `this.fnConvierte(document.frmPreg28.preg28.value)`, "opcion":0, "default":0, "descripcion":"28. Sé cuando otras personas necesitan ayuda y siempre tengo la disposición de ayudarles."},
                {"numero":"29", "valor": `this.fnConvierte(document.frmPreg29.preg29.value)`, "opcion":0, "default":0, "descripcion":"29. Quiero satisfacer las necesidades espirituales de los creyentes, por lo que me gusta participar en ministerios de edificación y discipulado."},
                {"numero":"30", "valor": `this.fnConvierte(document.frmPreg30.preg30.value)`, "opcion":0, "default":0, "descripcion":"30. Me gusta ayudar a las personas a entender cosas."},
                {"numero":"31", "valor": `this.fnConvierte(document.frmPreg31.preg31.value)`, "opcion":0, "default":0, "descripcion":"31. Soy capaz de elaborar planes efectivos para cumplir objetivos."},
                {"numero":"32", "valor": `this.fnConvierte(document.frmPreg32.preg32.value)`, "opcion":0, "default":0, "descripcion":"32. Tengo habilidades artísticas (música, drama, escribir, pintura, escultura, etc.) las cuales he puesto a disposición del reino de Dios."},
                {"numero":"33", "valor": `this.fnConvierte(document.frmPreg33.preg33.value)`, "opcion":0, "default":0, "descripcion":"33. Me doy cuenta de las personas o doctrinas falsas y manipuladoras cuando otros no se dan cuenta."},
                {"numero":"34", "valor": `this.fnConvierte(document.frmPreg34.preg34.value)`, "opcion":0, "default":0, "descripcion":"34. Personas de mi iglesia han sido animadas a amar y a actuar correctamente después de recibir mi consejo."},
                {"numero":"35", "valor": `this.fnConvierte(document.frmPreg35.preg35.value)`, "opcion":0, "default":0, "descripcion":"35. He llevado a otras personas a conocer a Jesús como su Salvador."},
                {"numero":"36", "valor": `this.fnConvierte(document.frmPreg36.preg36.value)`, "opcion":0, "default":0, "descripcion":"36. En situaciones específicas, Dios me ha dado la seguridad de que va a actuar en formas que parecen imposibles."},
                {"numero":"37", "valor": `this.fnConvierte(document.frmPreg37.preg37.value)`, "opcion":0, "default":0, "descripcion":"37. Doy generosa y libremente para apoyar la obra de Dios."},
                {"numero":"38", "valor": `this.fnConvierte(document.frmPreg38.preg38.value)`, "opcion":0, "default":0, "descripcion":"38. Tengo la habilidad de hacer que los extraños se sientan bienvenidos en mi hogar y en mi iglesia."},
                {"numero":"39", "valor": `this.fnConvierte(document.frmPreg39.preg39.value)`, "opcion":0, "default":0, "descripcion":"39. Oro por otras personas, con la conciencia de que su efectividad en lo que hacen depende de la oración."},
                {"numero":"40", "valor": `this.fnConvierte(document.frmPreg40.preg40.value)`, "opcion":0, "default":0, "descripcion":"40. Disfruto dirigiendo a otros al cumplimiento de objetivos que contribuyen a la causa de Cristo."},
                {"numero":"41", "valor": `this.fnConvierte(document.frmPreg41.preg41.value)`, "opcion":0, "default":0, "descripcion":"41. Disfruto trabajando con gente que sufre problemas físicos, mentales o emocionales."},
                {"numero":"42", "valor": `this.fnConvierte(document.frmPreg42.preg42.value)`, "opcion":0, "default":0, "descripcion":"42. He proclamado mensajes urgentes de la Palabra de Dios."},
                {"numero":"43", "valor": `this.fnConvierte(document.frmPreg43.preg43.value)`, "opcion":0, "default":0, "descripcion":"43. Me gusta trabajar en cosas pequeñas que contribuyen a la edificación del cuerpo de Cristo."},
                {"numero":"44", "valor": `this.fnConvierte(document.frmPreg44.preg44.value)`, "opcion":0, "default":0, "descripcion":"44. Me siento responsable cuando veo a una persona cristiana extraviarse."},
                {"numero":"45", "valor": `this.fnConvierte(document.frmPreg45.preg45.value)`, "opcion":0, "default":0, "descripcion":"45. Soy capaz de clarificar cosas para aprendices (niños o adultos)."},
                {"numero":"46", "valor": `this.fnConvierte(document.frmPreg46.preg46.value)`, "opcion":0, "default":0, "descripcion":"46. Disfruto supervisando ministerios importantes de la iglesia."},
                {"numero":"47", "valor": `this.fnConvierte(document.frmPreg47.preg47.value)`, "opcion":0, "default":0, "descripcion":"47. Tengo capacidad de ser creativo en áreas que contribuyen al desarrollo de la iglesia."},
                {"numero":"48", "valor": `this.fnConvierte(document.frmPreg48.preg48.value)`, "opcion":0, "default":0, "descripcion":"48. Tengo la capacidad de mirar debajo de las apariencias y detectar las motivaciones de las preguntas."},
                {"numero":"49", "valor": `this.fnConvierte(document.frmPreg49.preg49.value)`, "opcion":0, "default":0, "descripcion":"49. Creo que la gente crece y madura espiritualmente a través de la consegería e instrucción en la Palabra."},
                {"numero":"50", "valor": `this.fnConvierte(document.frmPreg50.preg50.value)`, "opcion":0, "default":0, "descripcion":"50. Me preocupan las amistades que no conocen de Cristo."},
                {"numero":"51", "valor": `this.fnConvierte(document.frmPreg51.preg51.value)`, "opcion":0, "default":0, "descripcion":"51. Percibo el momento cuando la oración de fe es necesaria."},
                {"numero":"52", "valor": `this.fnConvierte(document.frmPreg52.preg52.value)`, "opcion":0, "default":0, "descripcion":"52. Estoy dispuesto a vivir en forma sencilla para contribuir con mi dinero al crecimiento del reino."},
                {"numero":"53", "valor": `this.fnConvierte(document.frmPreg53.preg53.value)`, "opcion":0, "default":0, "descripcion":"53. Tiendo a estar más consciente de las necesidades de mis invitados que de las mías."},
                {"numero":"54", "valor": `this.fnConvierte(document.frmPreg54.preg54.value)`, "opcion":0, "default":0, "descripcion":"54. Tengo la convicción personal de que Dios contesta la oración de fe, y quiero que me use para ayudar a otros a través de mi oración."},
                {"numero":"55", "valor": `this.fnConvierte(document.frmPreg55.preg55.value)`, "opcion":0, "default":0, "descripcion":"55. Si tengo la oportunidad, me gustaría dirigir y motivar a otras personas en algún aspecto de la obra de Dios."},
                {"numero":"56", "valor": `this.fnConvierte(document.frmPreg56.preg56.value)`, "opcion":0, "default":0, "descripcion":"56. Ver la miseria me lleva a expresar el amor de Dios a las personas que sufren."},
                {"numero":"57", "valor": `this.fnConvierte(document.frmPreg57.preg57.value)`, "opcion":0, "default":0, "descripcion":"57. Si se da la oportunidad, me gustaría ser un predicador expositivo de la Palabra de Dios."},
                {"numero":"58", "valor": `this.fnConvierte(document.frmPreg58.preg58.value)`, "opcion":0, "default":0, "descripcion":"58. Es parte de mi naturaleza hacer el trabajo que ayude a otras personas a hacer el suyo."},
                {"numero":"59", "valor": `this.fnConvierte(document.frmPreg59.preg59.value)`, "opcion":0, "default":0, "descripcion":"59. Cuando me entero de gente que necesita orientación espiritual, surge en mí el instinto pastoral."},
                {"numero":"60", "valor": `this.fnConvierte(document.frmPreg60.preg60.value)`, "opcion":0, "default":0, "descripcion":"60. Con facilidad me doy cuenta cuando la gente (niños o adultos) no tienen un pensamiento claro."},
                {"numero":"61", "valor": `this.fnConvierte(document.frmPreg61.preg61.value)`, "opcion":0, "default":0, "descripcion":"61. Tengo la habilidad de delegar cosas importantes a la persona adecuada, en el momento preciso."},
                {"numero":"62", "valor": `this.fnConvierte(document.frmPreg62.preg62.value)`, "opcion":0, "default":0, "descripcion":"62. Estoy consciente de que he sido de bendición para otros a través de mis habilidades artísticas."},
                {"numero":"63", "valor": `this.fnConvierte(document.frmPreg63.preg63.value)`, "opcion":0, "default":0, "descripcion":"63. He desarrollado una habilidad para discriminar entre lo bueno y lo malo en el mundo de hoy."},
                {"numero":"64", "valor": `this.fnConvierte(document.frmPreg64.preg64.value)`, "opcion":0, "default":0, "descripcion":"64. Me siento contento cuando personas que necesitan ánimo, consuelo o apoyo, buscan mi ayuda."},
                {"numero":"65", "valor": `this.fnConvierte(document.frmPreg65.preg65.value)`, "opcion":0, "default":0, "descripcion":"65. Soy capaz de compartir el evangelio en una forma clara y significativa para lo que no creen"},
                {"numero":"66", "valor": `this.fnConvierte(document.frmPreg66.preg66.value)`, "opcion":0, "default":0, "descripcion":"66. Soy capaz de seguir creyendo de que Dios actuará a pesar de que la evidencia indique lo contrario."},
                {"numero":"67", "valor": `this.fnConvierte(document.frmPreg67.preg67.value)`, "opcion":0, "default":0, "descripcion":"67. Cuando ayudo a la gente, el Señor obra a través de contribuciones generosas y oportunas."},
                {"numero":"68", "valor": `this.fnConvierte(document.frmPreg68.preg68.value)`, "opcion":0, "default":0, "descripcion":"68. Mi hogar está disponible para aquellos que necesiten ser hospedados."},
                {"numero":"69", "valor": `this.fnConvierte(document.frmPreg69.preg69.value)`, "opcion":0, "default":0, "descripcion":"69. Estoy consciente de que ministro a otros cuando oro por ellos."},
                {"numero":"70", "valor": `this.fnConvierte(document.frmPreg70.preg70.value)`, "opcion":0, "default":0, "descripcion":"70. He aceptado responsabilidades de liderazgo y he tenido éxito en ayudar a un grupo a trabajar para el cumplimiento de un objetivo."},
                {"numero":"71", "valor": `this.fnConvierte(document.frmPreg71.preg71.value)`, "opcion":0, "default":0, "descripcion":"71. Me doy cuenta que realmente puedo ayudar a las personas enfermas, necesitadas o recluidas."},
                {"numero":"72", "valor": `this.fnConvierte(document.frmPreg72.preg72.value)`, "opcion":0, "default":0, "descripcion":"72. Dios me utiliza para animar, edificar y consolar a otros hablándoles de cosas espirituales."},
                {"numero":"73", "valor": `this.fnConvierte(document.frmPreg73.preg73.value)`, "opcion":0, "default":0, "descripcion":"73. Encuentro formas prácticas de ayudar a otras personas y me siento satisfecho haciéndolo."},
                {"numero":"74", "valor": `this.fnConvierte(document.frmPreg74.preg74.value)`, "opcion":0, "default":0, "descripcion":"74. Dios me ha utilizado para cuidar, guiar y edificar a otros creyentes y contribuir a su madurez espiritual."},
                {"numero":"75", "valor": `this.fnConvierte(document.frmPreg75.preg75.value)`, "opcion":0, "default":0, "descripcion":"75. Capto el interés de quienes enseño."},
                {"numero":"76", "valor": `this.fnConvierte(document.frmPreg76.preg76.value)`, "opcion":0, "default":0, "descripcion":"76. Sé cuándo y cómo un proyecto o ministerio necesita organizarse mejor."},
                {"numero":"77", "valor": `this.fnConvierte(document.frmPreg77.preg77.value)`, "opcion":0, "default":0, "descripcion":"77. Tengo una habilidad latente y creativa (en dibujo, escritura, música, etc.) que me gustaría utilizar para el beneficio del reino de Dios."},
                {"numero":"78", "valor": `this.fnConvierte(document.frmPreg78.preg78.value)`, "opcion":0, "default":0, "descripcion":"78. Generalmente me doy cuenta cuando la gente finge ser lo que no es."},
                {"numero":"79", "valor": `this.fnConvierte(document.frmPreg79.preg79.value)`, "opcion":0, "default":0, "descripcion":"79. Estoy dispuesto a invertir tiempo semanalmente en el ministerio de consejería."},
                {"numero":"80", "valor": `this.fnConvierte(document.frmPreg80.preg80.value)`, "opcion":0, "default":0, "descripcion":"80. Me entristece el que una persona no conozca de Cristo."},
                {"numero":"81", "valor": `this.fnConvierte(document.frmPreg81.preg81.value)`, "opcion":0, "default":0, "descripcion":"81. Realmente creo en las palabras de Jesús, cuando dijo que la fe mueve montañas."},
                {"numero":"82", "valor": `this.fnConvierte(document.frmPreg82.preg82.value)`, "opcion":0, "default":0, "descripcion":"82. Tengo la convicción de que todo lo que poseo pertenece a Dios y deseo ser un buen mayordomo."},
                {"numero":"83", "valor": `this.fnConvierte(document.frmPreg83.preg83.value)`, "opcion":0, "default":0, "descripcion":"83. Tengo un aprecio genuino por cada invitado a quien atiendo."},
                {"numero":"84", "valor": `this.fnConvierte(document.frmPreg84.preg84.value)`, "opcion":0, "default":0, "descripcion":"84. Me alegraría que me inviten a orar por alguna persona involucrada en el ministerio."},
                {"numero":"85", "valor": `this.fnConvierte(document.frmPreg85.preg85.value)`, "opcion":0, "default":0, "descripcion":"85. Me doy cuenta rápidamente cuando un grupo del que formo parte está perdiendo el tiempo y trato de hacer algo."},
                {"numero":"86", "valor": `this.fnConvierte(document.frmPreg86.preg86.value)`, "opcion":0, "default":0, "descripcion":"86. Me doy cuenta cuando alguien ha sido lastimado de alguna forma."},
                {"numero":"87", "valor": `this.fnConvierte(document.frmPreg87.preg87.value)`, "opcion":0, "default":0, "descripcion":"87. Creo que más cristianos deberían hablar acerca de temas como el aborto, la promiscuidad, el racismo, etc."},
                {"numero":"88", "valor": `this.fnConvierte(document.frmPreg88.preg88.value)`, "opcion":0, "default":0, "descripcion":"88. Desearía tener más oportunidades de ayudar a otras personas en el ejercicio de sus ministerios."},
                {"numero":"89", "valor": `this.fnConvierte(document.frmPreg89.preg89.value)`, "opcion":0, "default":0, "descripcion":"89. Me gustaría tener la oportunidad de capacitar a los santos para la obra del ministerio."},
                {"numero":"90", "valor": `this.fnConvierte(document.frmPreg90.preg90.value)`, "opcion":0, "default":0, "descripcion":"90. Me encanta descubrir nuevas ideas que puedo compartir con otras personas."}
            ];
            new Analisis().fnCreaPantalla(jsonPreguntas);

            document.querySelector("#btnAnaliza").addEventListener("click", () => new Analisis().fnAnalizar(jsonPreguntas));
        }
    }


    fnCreaPantalla(datos){
        // console.log(datos);
        let objeto = "";
        for(let pregunta of datos){
            objeto += `
            <div class="row">
            <div class="col s12 donTitulo">
                ${pregunta.descripcion}
            </div>
            <div class="col s12">
                <form name="frmPreg${pregunta.numero}">
                    <label><input class="with-gap" name="preg${pregunta.numero}" type="radio" value=1 ` + (pregunta.default==1 ? 'checked' : '') + `/><span>Muy poco</span></label>
                    <label><input class="with-gap" name="preg${pregunta.numero}" type="radio" value=2 ` + (pregunta.default==2 ? 'checked' : '')  + `/><span>Poco</span></label>                        
                    <label><input class="with-gap" name="preg${pregunta.numero}" type="radio" value=3 ` + (pregunta.default==3 ? 'checked' : '')  + `/><span>Algo</span></label>
                    <label><input class="with-gap" name="preg${pregunta.numero}" type="radio" value=4 ` + (pregunta.default==4 ? 'checked' : '')  + `/><span>Bastante</span></label>
                    <label><input class="with-gap" name="preg${pregunta.numero}" type="radio" value=5 ` + (pregunta.default==5 ? 'checked' : '')  + `/><span>Mucho</span></label>
                </form>
            </div>
            <div class="col s12 hide" id="errPreg${pregunta.numero}"><span class="red-text">Conteste esta pregunta</span></div>
        </div>
           `;
        }
        objeto += `
        <div class="row">
            <div class="col s12">
                <a class="waves-effect waves-light btn" id="btnAnaliza">Analizar respuestas</a>
            </div>
            <div class="col s12 hide" id="msgError">
                <span class="red-text" id="txtError">FALTAN RESPUESTAS POR CONTESTAR. VERIFIQUE LAS ALERTAS DE COLOR ROJO.</span>
            </div>
        </div>
        `
        document.getElementById("contenedorPreguntas").innerHTML = objeto;
    }

    fnConvierte(valor){
        var valorRetorno=0;
        if(isNaN(valor) || valor==""){} else {valorRetorno = valor;}
        return parseInt(valorRetorno);
    }

    fnAnalizar(jsonValores){
        var totalPreguntas = jsonValores.length; 

        // Validamos que cada pregunta haya sido contestada
        var contestada = false;
        var malas = 0;
        for (let pregunta of jsonValores){
            contestada = this.fnValida(pregunta.numero,eval(pregunta.valor));
            pregunta.opcion = eval(pregunta.valor);
            if(!contestada){ malas += 1;}
        }
        
        if(malas>0){ 
            document.getElementById("msgError").setAttribute('class','col s12'); 
            document.getElementById("txtError").innerHTML=`FALTAN ${malas} RESPUESTA(S) POR CONTESTAR. VERIFIQUE LAS ALERTAS DE COLOR ROJO.`;
            return;
        } else {
            document.getElementById("msgError").setAttribute('class','col s12 hide');
        }

        // AQUÍ COMENZAMOS EL RECORRIDO
        var totalesA = [
            {"don":"Administración","suma":0},
            {"don":"Arte","suma":0},
            {"don":"Discernimiento","suma":0},
            {"don":"Exhortación","suma":0},
            {"don":"Evangelización","suma":0},
            {"don":"Fe","suma":0},
            {"don":"Dar","suma":0},
            {"don":"Hospitalidad","suma":0},
            {"don":"Intercesión","suma":0},
            {"don":"Liderazgo","suma":0},
            {"don":"Misericordia","suma":0},
            {"don":"Profecía","suma":0},
            {"don":"Servicio","suma":0},
            {"don":"Pastoral","suma":0},
            {"don":"Enseñanza","suma":0}
        ];
        var totalesB = [
            {"don":"Administración","suma":0},
            {"don":"Arte","suma":0},
            {"don":"Discernimiento","suma":0},
            {"don":"Exhortación","suma":0},
            {"don":"Evangelización","suma":0},
            {"don":"Fe","suma":0},
            {"don":"Dar","suma":0},
            {"don":"Hospitalidad","suma":0},
            {"don":"Intercesión","suma":0},
            {"don":"Liderazgo","suma":0},
            {"don":"Misericordia","suma":0},
            {"don":"Profecía","suma":0},
            {"don":"Servicio","suma":0},
            {"don":"Pastoral","suma":0},
            {"don":"Enseñanza","suma":0}
        ];

        for (let pregunta of jsonValores){
            // Totales A
            if(pregunta.numero == "01" || pregunta.numero == "31" || pregunta.numero == "61"){totalesA[0].suma = totalesA[0].suma + pregunta.opcion;}
            if(pregunta.numero == "02" || pregunta.numero == "32" || pregunta.numero == "62"){totalesA[1].suma = totalesA[1].suma + pregunta.opcion;}
            if(pregunta.numero == "03" || pregunta.numero == "33" || pregunta.numero == "63"){totalesA[2].suma = totalesA[2].suma + pregunta.opcion;}
            if(pregunta.numero == "04" || pregunta.numero == "34" || pregunta.numero == "64"){totalesA[3].suma = totalesA[3].suma + pregunta.opcion;}
            if(pregunta.numero == "05" || pregunta.numero == "35" || pregunta.numero == "65"){totalesA[4].suma = totalesA[4].suma + pregunta.opcion;}
            if(pregunta.numero == "06" || pregunta.numero == "36" || pregunta.numero == "66"){totalesA[5].suma = totalesA[5].suma + pregunta.opcion;}
            if(pregunta.numero == "07" || pregunta.numero == "37" || pregunta.numero == "67"){totalesA[6].suma = totalesA[6].suma + pregunta.opcion;}
            if(pregunta.numero == "08" || pregunta.numero == "38" || pregunta.numero == "68"){totalesA[7].suma = totalesA[7].suma + pregunta.opcion;}
            if(pregunta.numero == "09" || pregunta.numero == "39" || pregunta.numero == "69"){totalesA[8].suma = totalesA[8].suma + pregunta.opcion;}
            if(pregunta.numero == "10" || pregunta.numero == "40" || pregunta.numero == "70"){totalesA[9].suma = totalesA[9].suma + pregunta.opcion;}
            if(pregunta.numero == "11" || pregunta.numero == "41" || pregunta.numero == "71"){totalesA[10].suma = totalesA[10].suma + pregunta.opcion;}
            if(pregunta.numero == "12" || pregunta.numero == "42" || pregunta.numero == "72"){totalesA[11].suma = totalesA[11].suma + pregunta.opcion;}
            if(pregunta.numero == "13" || pregunta.numero == "43" || pregunta.numero == "73"){totalesA[12].suma = totalesA[12].suma + pregunta.opcion;}
            if(pregunta.numero == "14" || pregunta.numero == "44" || pregunta.numero == "74"){totalesA[13].suma = totalesA[13].suma + pregunta.opcion;}
            if(pregunta.numero == "15" || pregunta.numero == "45" || pregunta.numero == "75"){totalesA[14].suma = totalesA[14].suma + pregunta.opcion;}

            // Totales B
            if(pregunta.numero == "16" || pregunta.numero == "46" || pregunta.numero == "76"){totalesB[0].suma = totalesB[0].suma + pregunta.opcion;}
            if(pregunta.numero == "17" || pregunta.numero == "47" || pregunta.numero == "77"){totalesB[1].suma = totalesB[1].suma + pregunta.opcion;}
            if(pregunta.numero == "18" || pregunta.numero == "48" || pregunta.numero == "78"){totalesB[2].suma = totalesB[2].suma + pregunta.opcion;}
            if(pregunta.numero == "19" || pregunta.numero == "49" || pregunta.numero == "79"){totalesB[3].suma = totalesB[3].suma + pregunta.opcion;}
            if(pregunta.numero == "20" || pregunta.numero == "50" || pregunta.numero == "80"){totalesB[4].suma = totalesB[4].suma + pregunta.opcion;}
            if(pregunta.numero == "21" || pregunta.numero == "51" || pregunta.numero == "81"){totalesB[5].suma = totalesB[5].suma + pregunta.opcion;}
            if(pregunta.numero == "22" || pregunta.numero == "52" || pregunta.numero == "82"){totalesB[6].suma = totalesB[6].suma + pregunta.opcion;}
            if(pregunta.numero == "23" || pregunta.numero == "53" || pregunta.numero == "83"){totalesB[7].suma = totalesB[7].suma + pregunta.opcion;}
            if(pregunta.numero == "24" || pregunta.numero == "54" || pregunta.numero == "84"){totalesB[8].suma = totalesB[8].suma + pregunta.opcion;}
            if(pregunta.numero == "25" || pregunta.numero == "55" || pregunta.numero == "85"){totalesB[9].suma = totalesB[9].suma + pregunta.opcion;}
            if(pregunta.numero == "26" || pregunta.numero == "53" || pregunta.numero == "86"){totalesB[10].suma = totalesB[10].suma + pregunta.opcion;}
            if(pregunta.numero == "27" || pregunta.numero == "57" || pregunta.numero == "87"){totalesB[11].suma = totalesB[11].suma + pregunta.opcion;}
            if(pregunta.numero == "28" || pregunta.numero == "58" || pregunta.numero == "88"){totalesB[12].suma = totalesB[12].suma + pregunta.opcion;}
            if(pregunta.numero == "29" || pregunta.numero == "59" || pregunta.numero == "89"){totalesB[13].suma = totalesB[13].suma + pregunta.opcion;}
            if(pregunta.numero == "30" || pregunta.numero == "60" || pregunta.numero == "90"){totalesB[14].suma = totalesB[14].suma + pregunta.opcion;}
        }
        totalesA=this.sortJSON(totalesA,'suma','desc'); totalesB=this.sortJSON(totalesB,'suma','desc');

        // DONES QUE TENGO
        var donesQueTengo = [];
        for(var a=0; a<5;a++){
            var don = totalesA[a];
            donesQueTengo.push(don);
        }

        // DONES POR DESARROLLAR
        var donesPorDesarrollar = [];
        var completo=0;
        var encontrado;
        for(var b=0; b<15;b++){
            var donB = totalesB[b];
            var nombreDon = donB.don;
            encontrado = 0;
            for (var p=0;p<5;p++){
                if(donesQueTengo[p].don == nombreDon){
                    encontrado = encontrado + 1;
                }
            }
            if(encontrado==0 && completo<5){
                donesPorDesarrollar.push(donB);
                completo = completo + 1;                
            }
        }

        var donesUtilizados = donesQueTengo.concat(donesPorDesarrollar);

        //DONES CON RESPONSABILIDAD
        var donesConResponsabilidad = [];
        var encontrado;
        for(var b=0; b<15;b++){
            var donB = totalesB[b];
            var nombreDon = donB.don;
            encontrado = 0;
            for (var p=0;p<10;p++){
                if(donesUtilizados[p].don == nombreDon){
                    encontrado = encontrado + 1;
                }
            }
            if(encontrado==0){
                donesConResponsabilidad.push(donB);
            }
        }

        // MOSTRAMOS EN PANTALLA LOS DONES QUE TENGO
        var contenido=`
        <div class="card teal lighten-2">
        <div class="card-content white-text">
          <p class="card-title ">Dones que tengo</p>
            <div class="dones dones-que-tengo">`;
            ;
            for(let don of donesQueTengo){
                contenido += `
                <p>${don.don}</p>
                `;
            }
            contenido += `
            </div>
        </div>
      </div>
        `;
        document.getElementById("donesQueTengo").innerHTML = contenido;

        // MOSTRAMOS EN PANTALLA LOS DONES POR DESARROLLAR
        var contenido=`
        <div class="card brown lighten-2">
        <div class="card-content white-text">
          <span class="card-title">Dones por desarrollar</span>
            <div class="dones dones-por-desarrollar">`;
            ;
            for(let don of donesPorDesarrollar){
                contenido += `
                <p>${don.don}</p>
                `;
            }
            contenido += `
            </div>
        </div>
      </div>
        `;
        document.getElementById("donesPorDesarrollar").innerHTML = contenido;

        // MOSTRAMOS EN PANTALLA LOS DONES CON RESPONSABILIDAD
        var contenido=`
        <div class="card deep-orange lighten-2">
        <div class="card-content white-text">
          <span class="card-title">No son mis dones pero alguna responsabilidad tendré con ellos.</span>
            <div class="dones dones-con-responsabilidad">`;
            ;
            for(let don of donesConResponsabilidad){
                contenido += `
                <p>${don.don}</p>
                `;
            }
            contenido += `
            </div>
        </div>
      </div>
        `;
        document.getElementById("donesConResponsabilidad").innerHTML = contenido;
    }



    fnValida(numero,valor){
        // var elemento = "errPreg" + numero;
        var elemento = `errPreg${numero}`;
        var retorno = true;
        if(valor==0){
            document.getElementById(elemento).setAttribute('class','col s12');
            retorno = false;
        } else {
            document.getElementById(elemento).setAttribute('class','col s12 hide');
            retorno = true;
        }
        return retorno;
    }

    sortJSON(data, key, orden) {
        return data.sort(function (a, b) {
            var x = a[key],
            y = b[key];
    
            if (orden === 'asc') {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }
    
            if (orden === 'desc') {
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            }
        });
    }
}
window.onload = () => new Analisis(true);