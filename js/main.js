 const openItem = item =>{
    const container = item.closest(".people__item");
    const contentBlock = container.find(".people__content");
    const textBlock = contentBlock.find(".people__content-block");
    const reqHeight = textBlock.height();

    container.addClass("active")
    contentBlock.height(reqHeight);
 }

 const closeEveryItme = container => {
    const items = container.find('.people__content');
    const itemContainer = container.find(".people__item");

    itemContainer.removeClass("active")
    items.height(0);
 }

 $('.people__trigger').click(e => {
     const $this = $(e.currentTarget);
     const container = $this.closest('.team__people');
     const elemContainer = $this.closest(".people__item")

     if (elemContainer.hasClass("active")) {
        closeEveryItme(container);
     } else {
         closeEveryItme(container);
         openItem($this);
     }


     closeEveryItme(container)
     openItem($this)
 });




 