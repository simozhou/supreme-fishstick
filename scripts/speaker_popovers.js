$(document).ready(function() {
      $('#valsecchi-div').popover({
        placement: 'bottom',
        title: 'Claudia Keller Valsecchi',
        content: 'Research in our laboratory focuses on elucidating the fundamental mechanisms and the physiological relevance of gene copy numbers for regulating cellular function in eukaryotes. We study the causes and consequences of gene dosage alterations and their impact on developmental, evolutionary and ageing processes. A major interest lies in the evolution of sex chromosomes and molecular diversity of compensatory mechanisms.',
        trigger: 'click'
      });

      $('#chen-div').popover({
        placement: 'bottom',
        title: 'Fei Chen',
        content: 'Chen’s laboratory is building tools that bridge single-cell genomics with space and time, to enable discoveries of where cell types are localized within intact tissues, as well as when relevant transcriptional modules are active. To do this, the lab is developing novel experimental and computational technologies at the intersection of microscopy, genomics, and synthetic biology. His group is applying these tools to learn organizational principles governing tissue development and cellular mechanisms of disorganization during injury and disease.',
        trigger: 'click'
      });

      $('#scaffidi-div').popover({
        placement: 'bottom',
        title: 'Paola Scaffidi',
        content: 'We are interested in understanding how epigenetic mechanisms work together with alterations in the underlying genetic code and faulty communication between cells to promote cancer. By combining lab techniques with mouse models and patient samples, we want to find out how cells switch their identity as a cancer starts, and how they diversify from one another while the cancer grows. We then use this knowledge to search for ways to manipulate these processes to treat cancer more effectively.',
        trigger: 'click'
      });

      $('#ruprecht-div').popover({
        placement: 'bottom',
        title: 'Verena Ruprecht',
        content: 'Our lab studies the molecular and biophysical mechanisms that  control cell shape, migration and multicellular organization in the  early embryo. We further study how the tissue microenvironment and stress conditions regulate morphodynamic migration plasticity and dynamic cell functions such as phagocytic activity. With our work we aim to address how developmental robustness and innate immune responses are established in the early embryo and how adaptive cell behaviours impact on disease processes such as cancer cell metastasis.',
        trigger: 'click'
      });

      // Hide the popover when focusing somewhere else
      // this is not working properly
      //$('body').on('click', function (e) {
      //  if ($(e.target).attr('id') !== 'valsecchi-div' && $(e.target).parents('.popover').length === 0) {
      //    $('#valsecchi-div').popover('hide');
      //  }
      //});
    });