---
layout: post
title: "수리통계학 Ⅰ & Ⅱ"
date: 2026-03-15 00:00:00
description: "수리통계학 1, 2 및 연습 핵심 개념 정리"
tags: statistics math
categories: study_notes
math: true
---

<style>
.post-title {
  font-weight: 700;
}

.post-content h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border-left: 4px solid #222;
  background: none;
  padding: 0.3em 0.7em;
  color: #222;
}

.post-content h3,
.post-content h4,
.post-content p,
.post-content li,
.post-content td,
.post-content th {
  font-size: 0.95rem;
  font-weight: 400;
}

.post-content h3 {
  font-weight: 600;
}

.post-content blockquote {
  border-left: none;
  background: none;
  padding: 0;
  margin: 0.3em 0;
  font-size: 0.95rem;
}

.post-content blockquote p {
  margin-bottom: 0;
}
</style>

## Chap 1. 확률과 확률분포

통계에서 수학적 이론을 도입하는 근본 목적: **확률실험에 대한 수학적 모형 제시**

> 실험에 대한 모형이 채택되어 이론적으로 전개되면, 이 테두리 안에서 확률실험에 관한 추론(=결론)을 내린다.

### 1.2 Sets

- **드모르간의 법칙**
- 정의역: $$X$$, 공역: $$Y$$

### 1.3 The Probability Set Function

3가지 조건을 만족하면 실함수 $$P$$를 **확률집합함수**라고 표현할 수 있는데, 확률의 3가지 조건과 동일하다.

- 확률의 연속 정리
- 불의 부등식

### 1.4 Conditional Probability and Independence

**조건부 확률**을 이용한:
- 확률의 곱셈법칙
- 총확률의 법칙 (배타적이고 전체를 이루는 사건 $$A_1, A_2, \ldots, A_k$$)
- **베이즈 정리**: $$P(A_i) > 0$$인 사건 $$A_1, \ldots, A_k$$에 대해 성립

> 증명: 조건부확률의 정의 + 총확률의 법칙

**독립성**

- 통계적 독립 = 확률적 독립 = 확률 개념에서의 독립
- 쌍으로 독립이라고 해서 서로 독립은 아님

  > 예: 사건 3가지 $$A_1, A_2, A_3$$ 존재 → 2쌍씩 독립이지만 3쌍이 독립이 아닐 수 있음

- **독립 실험**: 한 실험 결과에 대한 사건과 다른 실험 결과에 대한 사건이 독립되도록 확률 실험을 계속 시행

### 1.5 Random Variables (확률변수)

**확률변수**: 표본공간 $$C$$에서의 확률실험이 주어졌다면, 표본공간 $$C$$의 하나의 원소에 하나의 실수값을 대응시키는 함수

$$X$$의 공간(space) 또는 범위(range): $$D = \{x : x = X(c)\}$$

- $$D$$가 가산형 집합 → **이산형(discrete)** 확률변수
- $$D$$가 연속형 집합 → **연속형** 확률변수

pmf와 pdf는 서로 대응 관계.

---

## Chap 2. 다변량 분포

### 2.1 Distributions of Two Random Variables

$$\mathbf{X} = (X_1, X_2)'$$

결합분포, 주변분포 $$M_{X_1, X_2}(t_1, t_2)$$

$$E[\mathbf{X}] = \begin{bmatrix} E[X_1] \\ E[X_2] \end{bmatrix}$$

### 2.2 Transformations: Bivariate Random Variables

확률변수 함수의 분포를 구하는 방법:
1. 변수변환
2. cdf
3. 적률생성함수 기법

### 2.3 Conditional Distributions and Expectations

- 조건부 기댓값
- 조건부 분산

### 2.4 Independent Random Variables

- 누적분포함수로도 표현 가능
- $$E[X_1 X_2] = E[X_1] E[X_2]$$

### 2.5 The Correlation Coefficient

상관계수로 $$E[Y|X]$$와 $$E[\text{Var}(Y|X)]$$ 나타낼 수 있음.

---

## Chap 3. 특수 분포

> 모두 $$\Gamma$$ 분포와 관련된 분포!

### 감마분포 (Gamma Distribution)

$$\Gamma$$ 분포: 감마 함수 이용, $$\alpha, \beta$$ 값에 따라 다양한 분포 모양

**가법 성질**: $$X_i \overset{iid}{\sim} \Gamma(\alpha_i, \beta)$$ 이면 $$\sum X_i \sim \Gamma(\sum \alpha_i, \beta)$$

- 푸아송 분포에서도 자연적으로 발생
- $$[0, \infty)$$인 치우친 분포에서 다양한 모양

### 카이제곱 분포

- 통계학에서 자주 사용
- $$\Gamma$$ 분포의 가법 성질 동일하게 적용

$$X \sim \chi^2(r), \quad Y \sim \chi^2(s) \Rightarrow X + Y \sim \chi^2(r+s)$$

### 베타분포

유계구간 $$(a, b)$$를 받침으로 가진 분포에 대해 다양한 모양 제공

감마분포 따르는 두 확률변수 $$X \sim \Gamma(\alpha, 1),\ Y \sim \Gamma(\beta, 1)$$ 이용.

### 3.4 The Normal Distribution

위치모수 $$\mu$$, 척도모수 $$\sigma$$

$$X \sim N(\mu, \sigma^2), \quad \sigma^2 > 0$$

| 모수 종류 | 예시 |
|-----------|------|
| 척도 모수 | 감마분포의 $$\beta$$ |
| 형상 모수 | 감마분포의 $$\alpha$$, 이항분포의 $$p$$, 푸아송분포의 $$\mu$$ |

**가장 중요한 성질**: 독립성 하에서 **가법성**

### 3.5 The Multivariate Normal Distribution

### 3.6 t-분포

$$\bar{X} \sim N\!\left(\mu, \frac{\sigma^2}{n}\right)$$, 평균 $$0$$, 분산 $$\frac{r}{r-2}$$

### F 분포

$$U, V \sim \chi^2(r)$$에서

$$F = \frac{U/r_1}{V/r}$$

**스튜던트의 정리**

### 3.7 Mixture Distributions

복합: 분포의 혼합

---

## Chap 4. Elementary Statistical Inferences

- **통계량**: 표본의 함수
- **점추정량**: 불편성 만족, $$T$$를 점추정량, $$t$$를 점추정값
- **신뢰구간**: $$\theta$$를 포함할 확률이 $$1 - \alpha$$

**순서통계량**

- 몇 가지 성질이 확률표본을 얻은 분포에 의존하지 않기 때문에 중요
- 표본범위, 중앙값 같은 것 편하게 구할 수 있음 → q-q plot
- 이항분포는 이산성 때문에 중앙값에 대한 신뢰구간에서 단지 특정 신뢰수준만 가능

**검정 오류**

- 검정력을 최대화한다 = 2종 오류의 확률을 최소화한다
- 유의수준 $$\alpha$$ = 1종 오류를 범할 확률의 최댓값 = $$H_0$$이 참일 때 검정의 검정력 최댓값

**카이제곱 검정**: 적합도 검정, 독립성 검정

**비모수적 방법 vs 모수적 방법**

| | 방법 | 예시 |
|--|------|------|
| 모수적 | 특정 분포(예: 정규분포) 가정 | t-검정, ANOVA |
| 비모수적 | 특정 분포 가정 X | 몬테카를로 검정, 부트스트랩 |

---

## Chap 5. Consistency and Limiting Distributions

### 5.1 확률 수렴 (Consistency)

**확률 수렴**: 확률변수 $$X_n$$이 상수 $$\theta$$에 수렴

$$\lim_{n\to\infty} P(|X_n - \theta| \geq \varepsilon) = 0 \Rightarrow \text{일치성}$$

### 5.2 Convergence in Distribution

**분포 수렴**: cdf 기준, 연속인 점만 가능

$$\lim_{n\to\infty} F_{X_n}(x) = F_X(x)$$

- **퇴화분포(Degenerate Distribution)**: 확률변수가 특정한 하나의 값만을 가질 때의 분포, $$P(X = a) = 1$$
- $$X_n$$이 $$\theta$$로 확률수렴하면, $$X_n$$은 $$\theta$$로 분포수렴
- 확률유계 / 델타방법 / 적률생성함수 기법 → 분포수렴 확인

스털링 공식 이용.

### 5.3 Central Limit Theorem (CLT)

$$Y_n = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \xrightarrow{d} N(0, 1)$$

> mgf로 증명 → 통계적 추론에 응용

### 5.4 Extensions to Multivariate Distributions

---

## Chap 6. Maximum Likelihood Methods

### 6.1 Maximum Likelihood Estimation

**우도함수** $$L(\theta)$$: 로그는 일대일함수이므로 $$\ell(\theta) = \log L(\theta)$$ 사용해도 정보 손실 없음.

**MLE의 이론적 타당성**: 점근적으로 참값 $$\theta$$에서 우도함수가 최대가 된다 → **일치성**

> 표본이 많아질수록 $$\theta$$에서의 우도는 작아져, 참 모형과 다른 모형이 점점 더 명확히 분리된다는 의미

- MLE가 존재하는지, 존재한다면 유일한지에 대한 보장은 없다.

### 6.2 Rao-Cramer Lower Bound and Efficiency

### 6.3 Maximum Likelihood Tests

- **LRT (우도비검정)**
- **왈드형 검정**
- **스코어형 검정**

### 6.4 Multiparameter Case: Estimation

### 6.5 Multiparameter Case: Testing

### 6.6 The EM Algorithm

---

## Chap 7. Sufficiency

### 7.1 Measures of Quality of Estimators

다양한 통계적 추론에서 특정 통계량이 왜 사용되는지 설명.

① **일치성**: $$\hat{\theta}_n \xrightarrow{P} \theta$$ → 일치추정량

② **불편성**: $$E[\hat{\theta}] = \theta$$
- 둘 다 불편추정량이라면, 분산 작은 것 → **최소분산불편추정량 (MVUE)**

**결정 규칙**: 최악의 경우에서도 손실 함수가 최소화
- $$E[\text{손실함수}] = \text{위험함수}$$
- 최소최대기준에 따라 최선의 결정 함수
- 위험함수를 최소화하는 결정함수 = 최소평균제곱오차추정량

### 7.2 & 7.3 충분통계량 (Sufficient Statistic)

**충분통계량**: 모수에 대한 정보를 모두 확보하고 있다는 의미

> 충분통계량이 주어졌을 때 확률변수의 조건부 확률이 모수에 의존하지 않음

- 모수에 대한 MVUE를 찾는 경우, 그 모수에 대한 충분통계량이 존재하면 **그 충분통계량의 함수로 제한**하여 찾아야 한다.
- MLE는 점근적으로 $$\theta$$의 불편추정량

### 7.4 Completeness and Uniqueness

**완비성**: 통계량이 가진 정보가 부족하지 않다는 의미

$$E[u(Z)] = 0 \text{ for all } \theta \in \Theta \Rightarrow P(u(Z) = 0) = 1$$

- $$T(\mathbf{X})$$가 가지고 있는 정보로는 $$g(T(\mathbf{X}))$$를 "추가적으로 설명할 여지가 없다"는 뜻

**레만-셰페 정리**: $$\theta$$에 대한 충분통계량이며 완비하면, $$\theta$$의 불편추정량이 존재할 때 그 함수는 $$\theta$$의 **유일한 MVUE**

### 7.5 The Exponential Class of Distributions

지수족에 속하는 유명한 확률밀도함수: 베르누이, 이항분포, 포아송분포, 지수분포, 기하분포, 정규분포, 균등분포, 감마분포 등

- 지수류가 정칙 → 충분통계량이 $$\theta$$에 대한 완비충분통계량

**예시**
- $$\sigma^2$$이 알려진 $$N(\theta, \sigma^2)$$에서 $$\theta$$의 MLE $$\hat{\theta} = \bar{X}$$는 최소충분통계량
- 평균 $$\theta$$인 포아송 분포에서 $$\hat{\theta} = \bar{X}$$

---

## Chap 8. Optimal Tests of Hypotheses

### 8.2 Uniformly Most Powerful Tests (UMP)

유의수준 $$\alpha$$에서 대립가설 전체에 대해 검정력이 가장 높은 검정.

**최강력 검정 (Most Powerful Test)**의 일반화 → 복합 가설 (단측 대립 가설)의 검정

> 귀무가설 $$H_0$$ 아래 유의수준 조건을 만족하면서 대립가설 $$H_1$$ 전체에 대해 검정력이 균등하게 가장 높은 검정

우도비(LRT)를 사용해 최강력 검정을 구한 뒤, 이를 $$H_1$$의 모든 $$\mu > \mu_0$$에 대해 적용.

### 8.3 Likelihood Ratio Tests

**평균 검정**
- 타당성에 대한 견고성 O, 검정력에 대한 견고성 X
- 정규성 가정, t-분포 사용

**분산 검정**
