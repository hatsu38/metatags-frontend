import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CodeIcon from '@material-ui/icons/Code';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../styles/tagcode.scss';

export default function Tagcode(props) {
  const [openModal, setOpen] = React.useState(false);
  const [tooltipIsOpen, setTooltipIsOpen] = React.useState(false);
  const title = `
  <!-- Primary Meta Tags -->
  <title>${props.title}</title>
  <meta name="title" content="${props.title}">
  <meta name="description" content="${props.description}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${props.meta.url}">
  <meta property="og:title" content="${props.title}">
  <meta property="og:description" content="${props.description}">
  <meta property="og:image" content="${props.image}">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="${props.meta.url}">
  <meta property="twitter:title" content="${props.title}">
  <meta property="twitter:description" content="${props.description}">
  <meta property="twitter:image" content="${props.image}">`
  const handleModal = () => {
    setOpen(!openModal);
  };

  const handleTooltip = () => {
    setTooltipIsOpen(!tooltipIsOpen);
  };

  return (
    <div className='alignRight'>
      <Button
        variant="outlined"
        color="primary"
        className='tag-copy-design'
        startIcon={<CodeIcon />}
        onClick={handleModal}
      >
        Copy HTML Metatag
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className='modal'
        open={openModal}
        onClose={handleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className='modal-inner'>
            <h2 className='modal__title'>HTML Meta Tag</h2>
            <pre className='meta-group__pre'>
              <code id='html__code' className='meta-group__code'>
                { title }
              </code>
            </pre>
            <div class="modal__actions">
              <p class="modal__actions-helper">
                Copy the code into your website <code>&lt;head&gt;</code>
              </p>
              <ClickAwayListener onClickAway={handleTooltip}>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltip}
                  open={tooltipIsOpen}
                  arrow
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement='top'
                  title='Copied!'
                >
                  <CopyToClipboard text={title}>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      startIcon={<CodeIcon />}
                      onClick={handleTooltip}
                    >
                      Copy
                    </Button>
                  </CopyToClipboard>
                </Tooltip>
              </ClickAwayListener>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}