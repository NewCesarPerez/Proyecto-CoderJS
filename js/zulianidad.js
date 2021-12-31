const URLGET="../zul.json"
$("#h1Zulianidad").append('<h1 class="text-center cursor mt-5" id="btn1"><span class="colorPrimario">¿Quieres conocer un poco</span> <span class="colorSecundario">mas sobre nuestra tierra?</span></h1>');
$("#btn1").click(()=>{
    $.getJSON(URLGET, function(respuesta,estado){
        if(estado==="success"){
            let misDatos=respuesta;
            
            for (const dato of misDatos){
                $("#zulianidad").prepend(`
                <div class="col-12 col-md-6 col-lg-4  justify-content-around align-items-center my-3" style="display:none" id="fadeIn">
                    <div class="card my-4 mx-2" style="width: 13.1rem" >
                        <img class="card-img-top imgCarrito" src="${dato.image}" alt="">
                        <div class="card-body">
                            <h5 class="card-title c-secundario"> <span> ${dato.name}</span></h5>
                            <p class="card-text small"> <span>${dato.review} </span></p>
                            <a href="login.html"><button type="button" class="btn btn-primary ms-4 mt-2">Comprar</button></a
                        </div>
                        </div>
                    `);
                    $("#fadeIn").addClass("d-flex");
                    $("#fadeIn").fadeToggle(1500);

                    
                    
            }
            
            $("#btn1").fadeOut(2500);
        }
    })
})