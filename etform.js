/* ===== Shared design tokens (same as the catering form) ===== */
:root{--b:#e21e81;--bd:#b6156a;--bl:#ff5fa8;--w:#fff;--i:#1c0f19;--is:#5b4a56;--m:#fdeaf4;--z:cubic-bezier(0.22,1,0.36,1)}

/* ===== Modal shell ===== */
.etl-request-overlay{display:none;position:fixed;inset:0;z-index:1000;background:rgba(28,15,25,.55);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:24px}
.etl-request-overlay.etl-open{display:flex}
.etl-request-card{position:relative;width:min(460px,100%);max-height:calc(100vh - 48px);max-height:calc(100dvh - 48px);overflow-y:auto;background:var(--w);border-radius:20px;padding:28px 28px 36px;box-shadow:0 40px 80px -20px rgba(28,15,25,.45);display:flex;flex-direction:column;gap:14px}
.etl-request-close{position:absolute;top:14px;right:14px;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#f4e9ef;color:var(--is);font-size:20px;line-height:1;transition:background .2s var(--z),color .2s var(--z)}
.etl-request-close:hover{background:var(--m);color:var(--b)}
.etl-request-card h3{font-size:19px;font-weight:800;color:var(--i);padding-right:24px}
.etl-request-card>p{font-size:13px;color:var(--is);font-weight:500;margin-top:-8px;margin-bottom:4px}
#etlFormWrap{display:flex;flex-direction:column;gap:4px}
@media(min-width:861px){.etl-request-card{width:min(560px,92vw)}}

/* ===== Fields ===== */
.etl-form-group{display:flex;flex-direction:column;gap:8px}
.etl-form-group label{font-size:12.5px;font-weight:600;color:var(--i)}
.etl-form-group input,.etl-form-group select,.etl-form-group textarea{width:100%;font-family:inherit;font-size:14px;color:var(--i);padding:12px 14px;border:1.5px solid #e8dce4;border-radius:10px;background:var(--w);transition:border-color .2s var(--z),box-shadow .2s var(--z)}
.etl-form-group input::placeholder,.etl-form-group textarea::placeholder{color:#b7a8b1}
.etl-form-group input:focus,.etl-form-group select:focus,.etl-form-group textarea:focus{outline:0;border-color:var(--b);box-shadow:0 0 0 3px rgba(226,30,129,.14)}
.etl-form-group textarea{min-height:88px;resize:vertical}
.etl-form-group select{appearance:none;-webkit-appearance:none;cursor:pointer;padding-right:38px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235b4a56' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;background-size:16px}
.etl-char-count{font-size:11.5px;font-weight:700;color:var(--b);align-self:flex-end}
.etl-checkbox-group{display:flex;flex-wrap:wrap;gap:9px}
.etl-checkbox-option{display:inline-flex;align-items:center;gap:7px;font-size:13px;font-weight:600;color:var(--i);padding:9px 13px;border:1.5px solid #e8dce4;border-radius:999px;cursor:pointer;transition:border-color .2s var(--z),background .2s var(--z),color .2s var(--z)}
.etl-checkbox-option input{width:auto;padding:0;margin:0;accent-color:var(--b);cursor:pointer}
.etl-checkbox-option:has(input:checked){border-color:var(--b);background:var(--m);color:var(--bd)}
.etl-conditional-section{display:flex;flex-direction:column;gap:20px}

/* ===== Modal responsive ===== */
@media(max-width:640px){.etl-request-overlay{padding:16px;align-items:flex-start}.etl-request-card{max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px);padding:22px 18px 30px;border-radius:16px}}
@media(max-width:420px){.etl-request-card{padding:20px 16px 28px}.etl-request-card h3{font-size:17px}}

/* ===== Wizard: progress, steps, buttons ===== */
.etlw-progress-row{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.etlw-step-actions{display:flex;align-items:center;gap:12px;width:100%}
.etlw-back{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#f4e9ef;color:var(--i);flex-shrink:0;transition:background .2s var(--z),color .2s var(--z)}
.etlw-back:hover{background:var(--m);color:var(--b)}
.etlw-back svg{width:16px;height:16px}
.etlw-back-inline{width:48px;height:48px;border:1.5px solid #e8dce4;background:#fff;box-shadow:none}
.etlw-step-actions .etlw-continue{flex:1 1 auto;width:auto}
.etlw-progress-label{font-size:11.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--is)}
.etlw-progress-track{width:100%;height:4px;border-radius:4px;background:#f1e3ea;overflow:hidden;margin-bottom:20px}
.etlw-progress-fill{height:100%;width:10%;background:var(--b);border-radius:4px;transition:width .35s var(--z)}
.etlw-step{display:none;flex-direction:column;gap:18px}
.etlw-step.etlw-step-active{display:flex}
.etlw-step h3{font-size:20px;font-weight:800;color:var(--i);line-height:1.3}
.etlw-subtitle{font-size:13.5px;color:var(--is);font-weight:500;margin-top:-10px}
.etlw-continue{width:100%;padding:14px 20px;background:var(--b);color:var(--w);font-weight:700;font-size:15px;border-radius:999px;box-shadow:0 14px 28px -12px rgba(226,30,129,.55);transition:background .25s var(--z),transform .2s var(--z),opacity .2s var(--z)}
.etlw-continue:hover{background:var(--bd);transform:translateY(-1px)}
.etlw-continue:disabled{opacity:.5;cursor:not-allowed;transform:none}
.etlw-optional-tag{display:inline-block;margin-left:6px;padding:2px 8px;border-radius:999px;background:#f4e9ef;color:var(--is);font-size:10.5px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;vertical-align:middle}
.etlw-note{display:flex;gap:9px;align-items:flex-start;background:var(--m);border-radius:12px;padding:12px 14px;font-size:12.5px;color:var(--is);line-height:1.55}
.etlw-note svg{width:16px;height:16px;color:var(--b);flex-shrink:0;margin-top:1px}
.etlw-footer-note{font-size:12px;color:#b7a8b1;font-weight:600;text-align:center}
.etlw-phone-row{display:flex;gap:8px}
.etlw-phone-prefix{flex:0 0 auto;display:flex;align-items:center;padding:12px;border:1.5px solid #e8dce4;border-radius:10px;font-size:14px;font-weight:700;color:var(--is);background:#faf5f8}
.etlw-phone-row input{flex:1 1 auto}

/* ===== Privacy consent ===== */
.etlw-consent-row{margin-top:-6px}
.etlw-consent-check{display:flex;align-items:flex-start;gap:10px;cursor:pointer}
.etlw-consent-check input{position:absolute;opacity:0;width:0;height:0}
.etlw-consent-box{width:20px;height:20px;border-radius:6px;border:1.5px solid #e8dce4;background:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;color:#fff;transition:background .2s var(--z),border-color .2s var(--z)}
.etlw-consent-box svg{width:13px;height:13px;opacity:0;transition:opacity .15s var(--z)}
.etlw-consent-check input:checked+.etlw-consent-box{background:var(--b);border-color:var(--b)}
.etlw-consent-check input:checked+.etlw-consent-box svg{opacity:1}
.etlw-consent-text{font-size:13px;line-height:1.55;color:var(--is);font-weight:500}
.etlw-consent-text a{color:var(--b);font-weight:700;text-decoration:underline}

/* ===== OTP ===== */
.etlw-otp-row{display:flex;gap:10px;justify-content:start;flex-wrap:wrap}
.etlw-otp-input{width:100%;aspect-ratio:1/1;max-width:46px;text-align:center;font-size:20px;font-weight:700;color:var(--i);border:1.5px solid #e8dce4;border-radius:12px;background:#faf5f8;transition:border-color .2s var(--z),box-shadow .2s var(--z),background .2s var(--z)}
.etlw-otp-input:focus{outline:0;border-color:var(--b);background:#fff;box-shadow:0 0 0 3px rgba(226,30,129,.14)}
.etlw-otp-input.etl-otp-filled{border-color:var(--bl);background:#fff}
.etlw-otp-resend{font-size:13px;font-weight:600;color:var(--is)}
.etlw-otp-resend-btn{font-weight:800;font-size:13px;color:var(--b);padding:0;margin-left:4px;display:inline}
.etlw-otp-resend-btn:disabled{color:var(--is);cursor:not-allowed;opacity:.75}
@media(max-width:420px){.etlw-otp-input{max-width:40px;font-size:18px}.etlw-otp-row{gap:8px}}

/* ===== Service cards (step 2) and transition (step 3) ===== */
.etlw-service-cards{display:flex;flex-direction:column;gap:10px}
.etlw-service-card{position:relative;display:flex;align-items:center;gap:14px;padding:13px 16px;border:1.5px solid #e8dce4;border-radius:14px;cursor:pointer;transition:border-color .2s var(--z),background .2s var(--z)}
.etlw-service-card input{position:absolute;opacity:0;width:0;height:0}
.etlw-service-card:has(input:checked){border-color:var(--b);background:var(--m)}
.etlw-service-icon-badge{width:42px;height:42px;border-radius:11px;background:var(--m);color:var(--b);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s var(--z),color .2s var(--z)}
.etlw-service-card:has(input:checked) .etlw-service-icon-badge{border:1px solid var(--bl)}
.etlw-service-icon-badge img{width:30px;height:30px;object-fit:contain;display:block}
.etlw-service-card b{display:block;font-family:Poppins,sans-serif;font-weight:700;font-size:15px;color:var(--i)}
.etlw-service-card span{font-size:12.5px;color:var(--is)}
.etlw-transition{text-align:center;display:flex;flex-direction:column;align-items:center;gap:12px;padding:10px 0 4px}
.etlw-pill{display:inline-flex;align-items:center;padding:7px 16px;border-radius:999px;background:var(--m);color:var(--bd);font-weight:700;font-size:12.5px}
.etlw-transition h3{font-size:21px}
.etlw-transition p{font-size:14px;color:var(--is);max-width:340px}

/* ===== Number stepper ===== */
.etlw-stepper{display:flex;align-items:center;gap:14px}
.etlw-stepper-btn{width:38px;height:38px;border-radius:50%;background:#f4e9ef;color:var(--i);font-size:19px;font-weight:700;display:flex;align-items:center;justify-content:center;transition:background .2s var(--z),color .2s var(--z);flex-shrink:0;line-height:1}
.etlw-stepper-btn:hover{background:var(--m);color:var(--b)}
.etlw-stepper input{width:60px;text-align:center;border:1.5px solid #e8dce4;border-radius:10px;padding:9px 6px;font-size:15px;font-weight:700;color:var(--i)}

/* ===== Option cards (radio) ===== */
.etlw-option-list{display:flex;flex-direction:column;gap:10px}
.etlw-option-card{position:relative;display:flex;flex-direction:column;gap:2px;padding:13px 16px;border:1.5px solid #e8dce4;border-radius:12px;cursor:pointer;transition:border-color .2s var(--z),background .2s var(--z)}
.etlw-option-card input{position:absolute;opacity:0;width:0;height:0}
.etlw-option-card:has(input:checked){border-color:var(--b);background:var(--m)}
.etlw-option-card b{font-family:Poppins,sans-serif;font-weight:700;font-size:14.5px;color:var(--i)}
.etlw-option-card:has(input:checked) b{color:var(--bd)}
.etlw-option-card span{font-size:12px;color:var(--is)}

/* ===== Segmented pills (house type) ===== */
.etlw-segmented{display:flex;flex-wrap:wrap;gap:9px}
.etlw-segmented label{position:relative;font-size:13px;font-weight:700;color:var(--i);padding:10px 16px;border:1.5px solid #e8dce4;border-radius:999px;cursor:pointer;transition:border-color .2s var(--z),background .2s var(--z),color .2s var(--z)}
.etlw-segmented input{position:absolute;opacity:0;width:0;height:0}
.etlw-segmented label:has(input:checked){border-color:var(--b);background:var(--m);color:var(--bd)}

/* ===== Confirmation ===== */
.etlw-confirm{text-align:center;padding:6px 4px 4px}
.etlw-confirm-icon{width:56px;height:56px;border-radius:50%;background:var(--m);display:flex;align-items:center;justify-content:center;margin:0 auto 18px}
.etlw-confirm h3{font-size:20px;margin-bottom:8px}
.etlw-confirm p{font-size:14px;color:var(--is);max-width:320px;margin:0 auto;line-height:1.6}
.etlw-confirm-pill{display:inline-flex;align-items:center;gap:7px;margin-top:16px;padding:9px 16px;border-radius:999px;background:var(--m);color:var(--bd);font-weight:700;font-size:12.5px}
.etlw-confirm-pill svg{width:14px;height:14px}
.etlw-confirm-ref{margin-top:14px;font-size:12px;color:#b7a8b1;font-weight:600}

/* ===== Inline errors ===== */
.etl-field-error{display:block;color:#d92a4c;font-size:12px;font-weight:700;line-height:1.4;margin-top:8px}
.etl-input-error,.etl-input-error:focus,.etl-input-error:invalid,.etl-has-error,.etl-has-error .etlw-service-card,.etl-has-error .etlw-option-card,.etl-has-error .etlw-segmented label{box-shadow:none!important}
.etl-has-error .etlw-service-card,.etl-has-error .etlw-option-card,.etl-has-error .etlw-segmented label{background:rgba(217,42,76,.02)}
