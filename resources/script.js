

const cards = document.querySelectorAll('.workcard');


cards.forEach(card => {
    card.addEventListener('click', () => {
      // 1) Determine if this card is already expanded
      const isExpanded = card.style.width === '400px';

      // 2) Collapse all cards and hide all descriptions
      cards.forEach(c => {
        c.style.width = '200px';
        const desc = c.querySelector('.description');
        if (desc) desc.style.display = 'none';
      });

      // 3) If this one was NOT already expanded, expand it
      if (!isExpanded) {
        card.style.width = '400px';

        // Show its description once the width transition finishes
        const onEnd = e => {
          if (e.propertyName === 'width') {
            const desc = card.querySelector('.description');
            if (desc) desc.style.display = 'block';
            card.removeEventListener('transitionend', onEnd);
          }
        };
        card.addEventListener('transitionend', onEnd);
      }
      // if it *was* expanded, we just left it collapsed, no re‑expand
    });
  });




/*

cards.forEach(card => {
    card.addEventListener('click', () => {
      // 1) Collapse every card, hide every description
      cards.forEach(c => {
        c.style.width = '200px';
        const desc = c.querySelector('.description');
        if (desc) desc.style.display = 'none';
      });

      // 2) Expand the clicked card
      card.style.width = '400px';

      // 3) After the width transition, show its description
      const onEnd = e => {
        if (e.propertyName === 'width') {
          const desc = card.querySelector('.description');
          if (desc) desc.style.display = 'block';
          card.removeEventListener('transitionend', onEnd);
        }
      };
      card.addEventListener('transitionend', onEnd);
    });
  });

*/
