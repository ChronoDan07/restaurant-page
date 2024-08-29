import img1 from "./images/brined fish.png";
import img2 from "./images/creamy skyr with nuts and herbs.png"
import img3 from "./images/gravlax.png"
import img4 from "./images/hearty_viking_stew.png"
import img5 from "./images/viking flat bread.png"

 export function changeTabs(tab=0, content){

    const images = [img1, img2, img3, img4, img5];

    const contentBox = document.createElement('div')
    contentBox.classList.add("content-box");
    while(content.firstChild){
                content.removeChild(content.firstChild)
            }
        
    if (tab == 1) {
        const contentArea = document.createElement("div");
        contentArea.classList.add("content-area");
        contentBox.appendChild(contentArea);
        for (let i = 0; i < 5; i++) {
            contentArea.classList.add("menu");
            
            const text = document.createElement("div");
            text.classList.add("text-box");
            const title = document.createElement("div");
            title.classList.add("title-box");
            const desc = document.createElement("div");
            desc.classList.add("desc-box");
            const ingredTitle = document.createElement("div");
            ingredTitle.classList.add("ingred-title");
            const ingredDesc = document.createElement("div");
            ingredDesc.classList.add("ingred-desc");
            const divs = document.createElement("div");
            divs.classList.add("box");
            const img = document.createElement('img');
            switch (i) {
                case 0:
                    title.textContent = "BRINED FISH";
                    desc.textContent = "Savor the robust flavors of our carefully brined fish, prepared with the finest herbs and spices.";
                    ingredTitle.textContent = "INGREDIENTS:";
                    ingredDesc.textContent += "Fresh fish, Sea salt, Water, Bay leaves, Peppercorns, Dill, Lemon slices, Onion";
                    break;
                case 1:
                    title.textContent = "CREAMY SKYR WITH NUTS AND HERBS";
                    desc.textContent = "Delight in the creamy texture of traditional skyr, enhanced with crunchy nuts and aromatic herbs.";
                    ingredTitle.textContent = "INGREDIENTS:";
                    ingredDesc.textContent += "Skyr, Mixed nuts, Fresh herbs (like dill and parsley), Honey, Lemon zest";
                    break;
                case 2:
                    title.textContent = "GRAVLAX";
                    desc.textContent = "Enjoy our delicate gravlax, cured to perfection with dill and other Nordic spices.";
                    ingredTitle.textContent = "INGREDIENTS:";
                    ingredDesc.textContent += "Fresh salmon, Sea salt, Sugar, Fresh dill, Mustard, Cracked black pepper, Lemon zest";
                    break;
                case 3:
                    title.textContent = "HEARTY VIKING STEW";
                    desc.textContent = "Warm up with our hearty Viking stew, a nourishing blend of meat, vegetables, and rich broth.";
                    ingredTitle.textContent = "INGREDIENTS:";
                    ingredDesc.textContent += "Beef or lamb, Carrots, Potatoes, Onions, Cabbage, Barley, Beef broth, Fresh thyme";
                    break;
                case 4:
                    title.textContent = "VIKING FLAT BREAD";
                    desc.textContent = "Complement your meal with our freshly baked Viking flat bread, perfect for sopping up every delicious bite.";
                    ingredTitle.textContent = "INGREDIENTS:";
                    ingredDesc.textContent += "Whole wheat flour, Water, Salt, Yeast, Honey, Rolled oats";
                    break;    
            
                default:
                    break;
            }
            img.classList.add("image")
            img.src = images[i];
            contentArea.appendChild(divs);
            contentArea.appendChild(text);
            text.appendChild(title);
            text.appendChild(desc);
            text.appendChild(ingredTitle);
            text.appendChild(ingredDesc);
            divs.appendChild(img)
        }
        

    }
    else if(tab == 0){
        const text = document.createElement("div");
        const title = document.createElement("div");
        const desc = document.createElement("div");
        const text1 = document.createElement("p")
        const text2 = document.createElement("p")
        const text3 = document.createElement("p")
        const text4 = document.createElement("p")
        contentBox.classList.add("home");
        text.classList.add("text-box");
        title.classList.add("title-box")
        desc.classList.add("desc-box");
        title.textContent = "Welcome to Valhalla Feast";
        text1.textContent = "Welcome to Valhalla Feast, where every meal is a journey through the rich and hearty flavors of Viking cuisine. Step into our realm and experience a feast worthy of the gods. Our menu is crafted with traditional recipes and fresh ingredients, offering a taste of the ancient Nordic culture."
        text2.textContent = "From savory, slow-cooked stews that warm the soul to crisp, freshly baked flatbreads that accompany every dish, each bite is a tribute to the Viking spirit. Savor the robust flavors of brined fish, delicately seasoned and cooked to perfection, or indulge in the creamy richness of skyr, paired with nuts and herbs for a truly authentic experience.";
        text3.textContent = "Our gravlax, cured with a blend of spices and herbs, brings a touch of the sea to your table, while our mead, brewed with honey and spices, offers a sweet and satisfying finish. At Valhalla Feast, we invite you to gather around the table, share stories, and enjoy the camaraderie that defined the Viking way of life.";
        text4.textContent = "Whether you are a seasoned warrior or a curious traveler, our doors are open, and our hearth is warm. Embrace the spirit of the North, and let the flavors of Valhalla transport you to a time of legend and adventure.";
        contentBox.appendChild(text);
        text.appendChild(title);
        text.appendChild(desc);
        desc.appendChild(text1);
        desc.appendChild(text2);
        desc.appendChild(text3);
        desc.appendChild(text4);

    }
    else if(tab == 2){
        const text = document.createElement("div");
        const title = document.createElement("div");
        const desc = document.createElement("div");
        const mapBox = document.createElement("div");
        const map = document.createElement("iframe");
        const text1 = document.createElement("p")
        const text2 = document.createElement("p")
        contentBox.classList.add("home");
        text.classList.add("text-box");
        title.classList.add("title-box");
        desc.classList.add("desc-box");
        mapBox.classList.add("map-box");
        mapBox.textContent = "Where to find us:"
        map.classList.add("map");
        map.src = "https:\/\/www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3992678.878418622!2d8.192569831912815!3d61.270592660496334!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sro!4v1724855696939!5m2!1sen!2sro";
        title.textContent = "About Us";
        text1.textContent = "Welcome to Valhalla Feast, where we bring the bold flavors of Viking cuisine to life. Our passion lies in recreating the hearty meals that fueled Norse warriors, using traditional recipes and fresh ingredients. Each dish, from savory stews to crisp flatbreads, offers a taste of ancient Nordic culture.";
        text2.textContent = "At Valhalla Feast, we\’re more than just a restaurant—we\’re a gathering place for those who love good food and great company. Join us for a meal, share in the Viking spirit, and experience a feast fit for the gods.";
        contentBox.appendChild(text);
        text.appendChild(title);
        text.appendChild(desc);
        desc.appendChild(text1);
        desc.appendChild(text2);
        text.appendChild(mapBox);
        mapBox.appendChild(map);
    }
    else if(tab == 3){
        contentBox.classList.add("contact");
        const text = document.createElement("div");
        const title = document.createElement("div");
        const desc = document.createElement("div");
        const form = document.createElement("form");
        form.setAttribute('action','#');
        form.setAttribute('method','get');
        
        const labelF = document.createElement("label");
        const inputF = document.createElement("input");
        const labelL = document.createElement("label");
        const inputL = document.createElement("input");
        const labelE = document.createElement("label");
        const inputE = document.createElement("input");
        const labelM = document.createElement("label");
        const inputM = document.createElement("textarea");
        const submit = document.createElement("button");
        submit.setAttribute('type','submit');
        submit.setAttribute('id','submit');
        submit.textContent = "Submit";

        const list = [[labelF,inputF],[labelL,inputL],[labelE,inputE],[labelM,inputM]];
        for (let i = 0; i < list.length; i++) {
            
            switch (i) {
                case 0:
                    list[i][0].setAttribute('for','fname');
                    list[i][0].textContent = "First Name: ";
                    list[i][1].setAttribute('type','text');
                    list[i][1].setAttribute('id','first-name');
                    list[i][1].setAttribute('placeholder','Leif');
                    list[i][1].required = true;
                    break;
                case 1:
                    list[i][0].setAttribute('for','lname');
                    list[i][0].textContent = "Last Name: ";
                    list[i][1].setAttribute('type','text');
                    list[i][1].setAttribute('id','last-name');
                    list[i][1].setAttribute('placeholder','Eriksson');
                    list[i][1].required = true;
                    break;
                case 2:
                    list[i][0].setAttribute('for','mail');
                    list[i][0].textContent = "Email: ";
                    list[i][1].setAttribute('type','email');
                    list[i][1].setAttribute('id','email');
                    list[i][1].setAttribute('placeholder','you@example.com');
                    list[i][1].required = true;
                
                    break;

                case 3:
                    list[i][0].setAttribute('for','mess');
                    list[i][0].textContent = "Message: ";
                    list[i][1].setAttribute('id','message');
                    list[i][1].setAttribute('placeholder','Type your request here...');
                    list[i][1].setAttribute('rows','15');
                    list[i][1].setAttribute('cols','55');
                    list[i][1].required = true;
                
                    break;
            
                default:
                    break;
            }
            
        }
        
        text.classList.add("text-box");
        title.classList.add("title-box");
        desc.classList.add("desc-box");
        title.textContent = "Contact Us";
        
        contentBox.appendChild(text);
        text.appendChild(title);
        text.appendChild(desc);
        desc.appendChild(form);
        form.appendChild(labelF);
        form.appendChild(inputF);
        form.appendChild(labelL);
        form.appendChild(inputL);
        form.appendChild(labelE);
        form.appendChild(inputE);
        form.appendChild(labelM);
        form.appendChild(inputM);
        form.appendChild(submit);

    }
    content.appendChild(contentBox);
}